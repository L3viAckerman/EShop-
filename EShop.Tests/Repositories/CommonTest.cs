using EShop.MAdmin;
using Microsoft.EntityFrameworkCore;
using Moq;
using Raven.Client.Documents;
using Raven.Client.Documents.Session;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EShop.Tests.Repositories
{
    public class CommonTest
    {
        protected IUnitOfWork UnitOfWork;
        protected MockContext MockContext;

        public CommonTest()
        {
            MockContext = new MockContext();
            UnitOfWork = new UnitOfWork(MockContext);
        }
        ~CommonTest() 
        {
            UnitOfWork.Dispose();
            MockContext.Dispose();
        }
        public static DbSet<T> GetQueryableMockDbSet<T>(List<T> sourceData) where T : class
        {
            var queryable = sourceData.AsQueryable();
            var dbSet = new Mock<DbSet<T>>();
            dbSet.As<IQueryable<T>>().Setup(m => m.Provider).Returns(queryable.Provider);
            dbSet.As<IQueryable<T>>().Setup(m => m.Expression).Returns(queryable.Expression);
            dbSet.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(queryable.ElementType);
            dbSet.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(queryable.GetEnumerator);

            return dbSet.Object;
        }
    }
}
