using KIEMTRATHUCHANH.DBContext;
using KIEMTRATHUCHANH.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;

namespace KIEMTRATHUCHANH.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReceiptController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public ReceiptController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Receipt>(json.GetValue("data").ToString());
            _context.Receipts.Add(model);
            _context.SaveChanges();
            return Json(model);
        }


        // POST: ReceiptController/Edit/5
        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<Receipt>(json.GetValue("data").ToString());
            _context.Receipts.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: ReceiptController/Delete/5
        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Receipts.SingleOrDefault(p => p.id == id);
            _context.Receipts.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet]
        public IActionResult getListUse()
        {
            var result = _context.Receipts.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                     name = d.TotalPrice
                 }).ToList();
            return Json(result);
        }
    }
}
