using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Angular.Models
{
    public class StatusContext : DbContext
    {
        public StatusContext (DbContextOptions<StatusContext> options)
            : base(options)
        {
        }

        public DbSet<Angular.Models.Status> Status { get; set; }
    }
}
