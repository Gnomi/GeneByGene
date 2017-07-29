using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Angular.Data;
using Angular.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    public class StatusController : Controller
    {
        private GeneContext _context;

        public StatusController(GeneContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Status> GetStatus()
        {
            return _context.Statuses;
        }
 
 
    }
}
