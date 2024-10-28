using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using KIEMTRATHUCHANH.DBContext;
using Newtonsoft.Json;
using KIEMTRATHUCHANH.Models;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http.HttpResults;

namespace BTTHUCHANH.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        private readonly ProductDbContext _context;
        // GET: ProductController
        public UserController(ProductDbContext context)
        {
            _context = context;
        }

        // POST: ProductController/Create
        [HttpPost("create")]
        public ActionResult Create([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<UserrManage>(json.GetValue("data").ToString());
            _context.Users.Add(model);
            _context.SaveChanges();
            return Json(model);
        }


        // POST: UserController/Edit/5
        [HttpPost("edit")]
        public ActionResult Edit([FromBody] JObject json)
        {
            var model = JsonConvert.DeserializeObject<UserrManage>(json.GetValue("data").ToString());
            _context.Users.Update(model);
            _context.SaveChanges();
            return Json(model);
        }

        // POST: UserController/Delete/5
        [HttpPost("delete")]
        public ActionResult Delete([FromBody] JObject json)
        {
            var id = (json.GetValue("id").ToString());
            var result = _context.Users.SingleOrDefault(p => p.id == id);
            _context.Users.Remove(result);
            _context.SaveChanges();
            return Json(result);

        }
        [HttpGet]
        public IActionResult getListUse()
        {
            var result = _context.Users.AsQueryable().
                 Select(d => new
                 {
                     id = d.id,
                     name = d.username
                 }).ToList();
            return Json(result);
        }
        [HttpPost("getPageListUse")]
        public IActionResult getPageListUse([FromQuery] int pageNumber, [FromQuery] int pageSize)
        {
            var result = _context.Users.AsQueryable()
                .Skip((pageNumber - 1) * pageSize).Take(pageSize).
                 Select(d => new
                 {
                     d.id,
                     d.username,
                     d.email,
                     d.phone,
                 }).ToList();
            return Json(result);
        }
        [HttpGet("getCount")]
        public IActionResult getCount()
        {
            int total = _context.Users.Count();
            return Json(total);
        }
    }
}
