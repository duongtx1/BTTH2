using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace KIEMTRATHUCHANH.Models
{
    [Table("Cart")]
    public class Cart
    {
        [Key]
        public string id { get; set; }
        public string userId { get; set; }
    }
}
