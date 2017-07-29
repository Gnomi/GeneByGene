using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Angular.Data;
using Angular.Models;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    public class SampleController : Controller
    {
        private GeneContext _context;

        public SampleController(GeneContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Sample> GetSamples()
        {
            return _context.Samples.Include(s => s.status)
                .Include(u => u.user);
        }


        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetSample([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var sample = await _context.Samples.Include(s => s.status)
                .Include(u => u.user)
                .SingleOrDefaultAsync(m => m.SampleId == id);
            //var sample = await _context.Samples.SingleOrDefaultAsync(m => m.SampleId == id);

            if (sample == null)
            {
                return NotFound();
            }

            return Ok(sample);
        }




        //http://localhost:63840/api/sample/status/Active
        [HttpGet("[action]/{Status}")]
        public IEnumerable<Sample> Status([FromRoute] string status)
        {
            return _context.Samples.Include(s => s.status)
               .Include(u => u.user).Where(m => m.status.status == status);

        }

        //http://localhost:63840/api/sample/Users/name       
        [HttpGet("[action]/{User}")]
        public IEnumerable<Sample> Users([FromRoute] string user)
        {
            return _context.Samples.Include(s => s.status)
               .Include(u => u.user).Where(m => m.user.FirstName.Contains(user) || m.user.LastName.Contains(user) || (m.user.FirstName + " " + m.user.LastName).Contains(user));

        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
