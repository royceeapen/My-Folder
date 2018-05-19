using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class ProjTask
    {
        [Key]
        public int tid { get; set; }
        public int assignedto { get; set; }
        [ForeignKey("assignedto")]
        public Employee employee { get; set; }
        public DateTime startdate { get; set; }
        public DateTime enddate { get; set; }
        public DateTime completion { get; set; }
        public int userstoryid { get; set; }
        [ForeignKey("userstoryid")]
        public Userstory userstory { get; set; }

    }
}