using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using EShop.Entities;
using EShop.MAdmin.MCategory;
using EShop.Models;
using FluentAssertions;
using KellermanSoftware.CompareNetObjects;
using KellermanSoftware.CompareNetObjects.Reports;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Raven.Client.Documents.Linq;

namespace EShop.Tests.Repositories
{
    [TestClass]
    public class CategoryRepositoryTests : CommonTest
    {
        private ICategoryRepository CategoryRepository;
        private TestDataContext     TestDataContext;

        [TestInitialize]
        public void Setup()
        {
            CategoryRepository = UnitOfWork.CategoryRepository;
            TestDataContext    = new TestDataContext();
        }

        [TestMethod]
        [DataTestMethod]
        [DataRow("Count_NoArgument_CountAllElements")]
        [DataRow("Count_WithCode_CorrectCount")]
        [DataRow("Count_NotExist_0")]
        public void Count_WithArgument(string caseName)
        {
            var testData = TestDataContext
               .CategoryRepo
               .First(c => c.TestCase == caseName);

            var expected = testData.Output.ToObject<int>();
            var count   = CategoryRepository.Count(testData.Input.ToObject<CategorySearchEntity>());

            count.Should().Be(expected);
        }

        [TestMethod]
        public void Update_CategoryWithDifferentCategoryNames_CategoryNamesUpdatedAccordingly()
        {
            var testData = TestDataContext
               .CategoryRepo
               .First(c => c.TestCase ==
                           nameof(Update_CategoryWithDifferentCategoryNames_CategoryNamesUpdatedAccordingly));

            var newCategory = testData.Input.ToObject<Category>();

            var success = CategoryRepository.Update(newCategory);

            success.Should().BeTrue();


            var expected = testData.Output.ToObject<Category>();
            var newCategoryNames   = MockContext.CategoryNames.Where(cn => cn.CategoryId == newCategory.Id);

            newCategoryNames.Select(cn => cn.CategoryId).Should().AllBeEquivalentTo(expected.Id);
            newCategoryNames.Select(cn => cn.Id).Should().NotContainNulls();
            newCategoryNames.Should().BeEquivalentTo(expected.CategoryNames, options => options
                                                                      .Excluding(cn => cn.Id)
                                                                      .Excluding(cn => cn.CategoryId));
        }
    }
}