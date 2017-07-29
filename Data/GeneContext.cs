using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.Models;
using Microsoft.EntityFrameworkCore;

namespace Angular.Data
{
    public class GeneContext: DbContext
    {
        public GeneContext(DbContextOptions<GeneContext> options) : base(options)
        {
        }

        public DbSet<Status> Statuses { get; set; }
        public DbSet<Sample> Samples { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Status>().ToTable("Status");            
            modelBuilder.Entity<User>().ToTable("User");
            modelBuilder.Entity<Sample>().ToTable("Sample");
                
        }
    }
}
