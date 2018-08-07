using EShop.Models;
using Microsoft.EntityFrameworkCore;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;
using System.Collections.Generic;
using System.Linq;
using Newtonsoft.Json.Linq;

namespace EShop.Tests
{
    class TestDataContext
    {
        protected IDocumentStore   DocumentStore;
        protected IDocumentSession DocumentSession;

        private IQueryable<RepoTestData<Category>> _categoryRepo;

        public TestDataContext()
        {
            DocumentStore = new DocumentStore()
            {
                Urls     = new[] {"http://10.1.11.171:88"},
                Database = "EShopTestData"
            }.Initialize();
            DocumentSession = DocumentStore.OpenSession();
        }

        ~TestDataContext()
        {
            DocumentSession.Dispose();
            DocumentStore.Dispose();
        }

        public IQueryable<RepoTestData<Category>> CategoryRepo =>
            _categoryRepo ?? (_categoryRepo = GetRepo<Category>());

        private IQueryable<RepoTestData<T>> GetRepo<T>() where T : class
        {
            var collectionName = typeof(T).Name + "Repo";
            var dataQuery      = DocumentSession.Query<RepoTestData<T>>(collectionName: collectionName);
            var repo           = dataQuery.AsQueryable();
            return repo;
        }

        public class RepoTestData<T> where T : class
        {
            public string  TestCase;
            public JToken Input;
            public JToken Output;
        }
    }
}