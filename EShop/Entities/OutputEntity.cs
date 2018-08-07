using EShop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EShop.Entities
{
    public partial class OutputEntity : BaseEntity
    {
        public Guid Id { get; set; }
        public Int32 Quantity { get; set; }
        public Decimal UnitPrice { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public Guid InventoryId { get; set; }
        public InventoryEntity InventoryEntity { get; set; }

        public OutputEntity():base() { }

        public OutputEntity(Output Output, params object[] args) :base(Output)
        {
		    foreach(object arg in args)
			{
                if (arg is Inventory Inventory)
                    InventoryEntity = new InventoryEntity(Inventory);				
			}
        }
    }

    public partial class OutputSearchEntity : FilterEntity
    {
        public Guid? Id { get; set; }
        public Int32? Quantity { get; set; }
        public Decimal? UnitPrice { get; set; }
        public DateTime? CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public Guid? InventoryId { get; set; }
    }
}
