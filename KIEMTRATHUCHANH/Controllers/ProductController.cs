using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KIEMTRATHUCHANH.DBContext;
using Newtonsoft.Json;
using KIEMTRATHUCHANH.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;
using System.Net.WebSockets;
namespace KIEMTRATHUCHANH.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : Controller
    {
        private readonly ProductDbContext _context;
       
        public ProductController(ProductDbContext context)
        {
            _context = context;
        }

     
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Product>(json.GetValue("data").ToString());
            model.id = Guid.NewGuid().ToString().Substring(0, 10);
            _context.Products.Add(model);
            _context.SaveChanges();
            return Json(model);
        }



        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Product>(json.GetValue("data").ToString());
            _context.Products.Update(model);
            _context.SaveChanges();
            return Json(model);
        }


        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Products.SingleOrDefault(p => p.id == id);
            _context.Products.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet("getListUse")]
        public IActionResult getListUse()
        {
            var result = _context.Products.AsQueryable().
                 Select(d => new
                 {
                     d.id,
                     d.productName,
                     d.unitPrice,
                 }).ToList();
            return Json(result);
        }
        [HttpGet("getCount")]
        public IActionResult getCount() {
            int total=_context.Products.Count();
            return Json(total);
        }
        [HttpPost("getPageListUse")]
        public IActionResult getPageListUse([FromQuery] int pageNumber, [FromQuery] int pageSize)
        {
            var result = _context.Products.AsQueryable()
                .Skip((pageNumber - 1) * pageSize).Take(pageSize).
                 Select(d => new
                 {
                     d.id,
                     d.productName,
                     d.unitPrice,
                     d.category,
                     d.description
                 }).ToList();
            return Json(result);
        }
        [HttpGet("getElementById/{id}")]
        public IActionResult getElementById([FromRoute] string id)
        {
            var model = _context.Products.AsQueryable().FirstOrDefault(m => m.id == id); ;
            if (model == null)
            {
                return NotFound();
            }
            return Json(model);
        }
    }
}
