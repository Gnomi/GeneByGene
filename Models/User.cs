using System.ComponentModel.DataAnnotations.Schema;

namespace Angular.Models
{
    public class User
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        //[Key, Column("UserId", Order = 1)]
        public int UserId { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }


        //public ICollection<Sample> Samples { get; set; }
    }
}
