using EShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.Entities
{
    public partial class IntroductionEntity : BaseEntity
    {
        public Guid Id { get; set; }
        public String Content { get; set; }
        public String Route { get; set; }

        public IntroductionEntity():base() { }

        public IntroductionEntity(Introduction Introduction, params object[] args) :base(Introduction)
        {
		    foreach(object arg in args)
			{
			}
        }
    }

    public partial class IntroductionSearchEntity : FilterEntity
    {
        public Guid? Id { get; set; }
        public String Content { get; set; }
        public String Route { get; set; }
    }
}
