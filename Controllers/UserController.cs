using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular.Data;
using Angular.Models;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {

        private GeneContext _context;

        public UserController(GeneContext context)
        {
            _context = context;
        }

        [HttpGet]
        //public IEnumerable<User> Get()
        public IActionResult get()
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return Ok(_context.Users);
        }


        [HttpGet("{id}")]
        public IActionResult GetUser([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var sample =  _context.Users.SingleOrDefault(m => m.UserId == id);

            if (sample == null)
            {
                return NotFound();
            }

            return Ok(sample);
        }
    }
}
