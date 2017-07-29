using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Angular.Models
{
    public class SampleContext : DbContext
    {
        public SampleContext (DbContextOptions<SampleContext> options)
            : base(options)
        {
        }

        public DbSet<Angular.Models.Sample> Sample { get; set; }
    }
}
