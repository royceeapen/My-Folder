using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Manager
    {
        [Key]
        public int mcid { get; set; }
        public string comment { get; set; }
        public int tid { get; set; }
        [ForeignKey("tid")]
        public ProjTask projtask { get; set; }
    }
}