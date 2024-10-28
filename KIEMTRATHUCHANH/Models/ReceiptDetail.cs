using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace KIEMTRATHUCHANH.Models
{
    [Table("ReceiptDetail")]
    public class ReceiptDetail
    {
        [Key]
        public string id { get; set; }
        public string idReceipt { get; set; }
        public string idProduct { get; set; }
        public int quantity { get; set; }
    }
}
