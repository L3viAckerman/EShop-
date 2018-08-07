using System;
using System.Collections.Generic;
using System.Data.Entity.Design.PluralizationServices;
using System.Globalization;
using System.Linq;
using EShop.Models;
using Microsoft.EntityFrameworkCore;
using Moq;
using Newtonsoft.Json;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;

namespace EShop.Tests
{
    public class MockContext : EShopContext
    {
        protected IDocumentStore      DocumentStore;
        protected IDocumentSession    DocumentSession;
        private   DbSet<Carrier>      _carriers;
        private   DbSet<Category>     _categories;
        private   DbSet<CategoryName> _categoryNames;

        public MockContext()
        {
            DocumentStore = new DocumentStore
            {
                Urls     = new[] {"http://10.1.11.171:88"},
                Database = "EShop"
            }.Initialize();
            DocumentSession = DocumentStore.OpenSession();
        }
        
        ~MockContext()
        {
            DocumentSession.Dispose();
            DocumentStore.Dispose();
        }
        
        #region Mock DbSets

        public override DbSet<Carrier>  Carriers   => _carriers ?? (_carriers = CreateMockDbSet<Carrier>());
        public override DbSet<Category> Categories => _categories ?? (_categories = CreateMockDbSet<Category>());

        public override DbSet<CategoryName> CategoryNames =>
            _categoryNames ?? (_categoryNames = CreateMockDbSet<CategoryName>());

        public override DbSet<City>                 Cities                => throw new NotImplementedException();
        public override DbSet<Country>              Countries             => throw new NotImplementedException();
        public override DbSet<Coupon>               Coupons               => throw new NotImplementedException();
        public override DbSet<Customer>             Customers             => throw new NotImplementedException();
        public override DbSet<CustomerGroup>        CustomerGroups        => throw new NotImplementedException();
        public override DbSet<Discount>             Discounts             => throw new NotImplementedException();
        public override DbSet<Employee>             Employees             => throw new NotImplementedException();
        public override DbSet<Input>                Inputs                => throw new NotImplementedException();
        public override DbSet<Introduction>         Introductions         => throw new NotImplementedException();
        public override DbSet<Inventory>            Inventories           => throw new NotImplementedException();
        public override DbSet<InventoryCheckpoint>  InventoryCheckpoints  => throw new NotImplementedException();
        public override DbSet<Invoice>              Invoices              => throw new NotImplementedException();
        public override DbSet<InvoiceLine>          InvoiceLines          => throw new NotImplementedException();
        public override DbSet<IssueNote>            IssueNotes            => throw new NotImplementedException();
        public override DbSet<IssueNoteLine>        IssueNoteLines        => throw new NotImplementedException();
        public override DbSet<Language>             Languages             => throw new NotImplementedException();
        public override DbSet<Manufacturer>         Manufacturers         => throw new NotImplementedException();
        public override DbSet<Module>               Modules               => throw new NotImplementedException();
        public override DbSet<ModuleOperation>      ModuleOperations      => throw new NotImplementedException();
        public override DbSet<ModuleRole>           ModuleRoles           => throw new NotImplementedException();
        public override DbSet<Operation>            Operations            => throw new NotImplementedException();
        public override DbSet<Order>                Orders                => throw new NotImplementedException();
        public override DbSet<OrderDetail>          OrderDetails          => throw new NotImplementedException();
        public override DbSet<Output>               Outputs               => throw new NotImplementedException();
        public override DbSet<Pack>                 Packs                 => throw new NotImplementedException();
        public override DbSet<Permission>           Permissions           => throw new NotImplementedException();
        public override DbSet<Product>              Products              => throw new NotImplementedException();
        public override DbSet<ProductAttribute>     ProductAttributes     => throw new NotImplementedException();
        public override DbSet<ProductAttributeName> ProductAttributeNames => throw new NotImplementedException();
        public override DbSet<ProductPicture>       ProductPictures       => throw new NotImplementedException();
        public override DbSet<ProductValue>         ProductValues         => throw new NotImplementedException();
        public override DbSet<ReceiptNote>          ReceiptNotes          => throw new NotImplementedException();
        public override DbSet<ReceiptNoteLine>      ReceiptNoteLines      => throw new NotImplementedException();
        public override DbSet<Role>                 Roles                 => throw new NotImplementedException();
        public override DbSet<ShipmentDetail>       ShipmentDetails       => throw new NotImplementedException();
        public override DbSet<Supplier>             Suppliers             => throw new NotImplementedException();
        public override DbSet<Tax>                  Taxes                 => throw new NotImplementedException();
        public override DbSet<WareHouse>            WareHouses            => throw new NotImplementedException();

        #endregion
        
        private DbSet<T> CreateMockDbSet<T>() where T : class
        {
            return new MockDbSet<T>(DocumentSession).Object;
        }

        private class MockDbSet<T> : Mock<DbSet<T>> where T : class
        {
            private readonly PluralizationService pService =
                PluralizationService.CreateService(CultureInfo.GetCultureInfo("en-US"));

            private readonly List<T> _data;

            public MockDbSet(IDocumentSession session)
            {
                //Assuming collection name in ravendb is the plural form of model's class name
                var collectionName = pService.Pluralize(typeof(T).Name);
                var dataQuery      = session.Query<T>(collectionName: collectionName);

                //Workaround for RavenDb string to GUID problem
                var rawData = dataQuery.As<dynamic>().ToList();
                _data = JsonConvert.DeserializeObject<List<T>>(JsonConvert.SerializeObject(rawData));

                var queryableData = _data.AsQueryable();
                this.As<IQueryable<T>>().Setup(m => m.Provider).Returns(queryableData.Provider);
                this.As<IQueryable<T>>().Setup(m => m.Expression).Returns(queryableData.Expression);
                this.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(queryableData.ElementType);
                this.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(queryableData.GetEnumerator());

                Setup(set => set.Add(It.IsAny<T>())).Callback<T>(t => _data.Add(t));
                Setup(set => set.Remove(It.IsAny<T>())).Callback<T>(t => _data.Remove(t));
            }
        }
    }
}