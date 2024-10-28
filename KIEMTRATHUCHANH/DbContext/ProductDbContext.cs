using KIEMTRATHUCHANH.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KIEMTRATHUCHANH.DBContext
{
    public class ProductDbContext : DbContext
    {

        public ProductDbContext(DbContextOptions<ProductDbContext> options): base (options)
        {

        }
        public DbSet<Product> Products { get; set; }
        public DbSet<UserrManage> Users { get; set; }
        public DbSet<Receipt> Receipts { get; set; }
        public DbSet<ReceiptDetail> ReceiptDetailS {  get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<CartDetail> CartDetails { get; set; }


    }
}
