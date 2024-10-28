using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KIEMTRATHUCHANH.DBContext;
using Newtonsoft.Json;
using KIEMTRATHUCHANH.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
namespace KIEMTRATHUCHANH.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CartController : Controller
    {
        private readonly ProductDbContext _context;
       
        public CartController(ProductDbContext context)
        {
            _context = context;
        }

     
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Cart>(json.GetValue("data").ToString());
            _context.Carts.Add(model);
            _context.SaveChanges();
            return Json(model);
        }



        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Cart>(json.GetValue("data").ToString());
            _context.Carts.Update(model);
            _context.SaveChanges();
            return Json(model);
        }


        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Carts.SingleOrDefault(p => p.id == id);
            _context.Carts.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet("getListUse")]
        public IActionResult getListUse()
        {
            var result = _context.Carts.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                 }).ToList();
            return Json(result);
        }
    }
}
