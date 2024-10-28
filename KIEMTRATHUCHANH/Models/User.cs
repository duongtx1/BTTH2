using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
namespace KIEMTRATHUCHANH.Models
{
    [Table("UserManage")]
    public class UserrManage
    {
        [Key]
        public string id { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string phone { get; set; }
    }
}
