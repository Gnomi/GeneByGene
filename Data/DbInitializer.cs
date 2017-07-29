using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Angular.Models;
using Microsoft.AspNetCore.Hosting;

namespace Angular.Data
{
    public static class DbInitializer
    {
        //private IHostingEnvironment _env;
        public static void Initialize(GeneContext context, IHostingEnvironment env)
        {

            string[] stringSeparators = new string[] { "\r\n" };

            //context.Database.EnsureDeleted();
            context.Database.EnsureCreated();
            if (context.Users.Any())
            {
                return;   // DB has been seeded
            }
                        
            var contents = System.IO.File.ReadAllText(env.ContentRootPath + "/data_files/Users.txt").Split(stringSeparators, StringSplitOptions.RemoveEmptyEntries);
            var csv = from line in contents
                      select line.Split(',').ToArray();
            foreach (var row in csv.Skip(1)
                .TakeWhile(r => r.Length > 1 && r.Last().Trim().Length > 0))
            {
                context.Users.Add(new User { UserId = int.Parse(row[0]), FirstName = row[1], LastName = row[2] });
            }
            context.SaveChanges();
            
            var Statuses = System.IO.File.ReadAllText(env.ContentRootPath + "/data_files/Statuses.txt").Split(stringSeparators, StringSplitOptions.RemoveEmptyEntries);
            csv = from line in Statuses
                  select line.Split(',').ToArray();
            foreach (var row in csv.Skip(1)
                .TakeWhile(r => r.Length > 1 && r.Last().Trim('\r').Length > 0))
            {
                context.Statuses.Add(new Status { statusId = int.Parse(row[0]), status  = row[1].Trim()});
            }
            context.SaveChanges();
            
            var Samples = System.IO.File.ReadAllText(env.ContentRootPath + "/data_files/Samples.txt").Split(stringSeparators, StringSplitOptions.RemoveEmptyEntries);

            csv = from line in Samples
                  select line.Split(',').ToArray();
            foreach (var row in csv.Skip(1)
                .TakeWhile(r => r.Length > 1 && r.Last().Trim().Length > 0))
            {
                context.Samples.Add(new Sample{SampleId = int.Parse(row[0]), Barcode = row[1],
                    CreatedAt = System.DateTime.Parse(row[2]), UserId=int.Parse(row[3]), StatusId=int.Parse(row[4]) });
            }
            context.SaveChanges();
        }

    }
}

