using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Angular.Models
{
    public class Sample
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int SampleId { get; set; }

        public string Barcode { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public System.DateTime CreatedAt { get; set; }

        //foreign key
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        [Column("CreatedBy")]
        public int UserId { get; set; }
        //foreign key to Status

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int StatusId { get; set; }

        public User user { get; set; }
        public Status status { get; set; }
    }
}
