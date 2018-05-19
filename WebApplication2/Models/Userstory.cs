using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Userstory
    {
        [Key]
        public int userstoryid { get; set; }
        public string story { get; set; }

        public int ProjId { get; set; }
        [ForeignKey("ProjId")]
        public Project project { get; set; }
    }
}