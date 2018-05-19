using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Project
    {
        [Key]
        public int ProjId { get; set; }
        public string ProjName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime Enddate { get; set; }
        public string ClientName { get; set; }
    }
}