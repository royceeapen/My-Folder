using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication2.Models
{
    public class Employee
    {
        [Key]
        public int employeeID { get; set; }
        
        public string FirstName { get; set; }
        public string LastName { get; set; }
        
        public int Age { get; set; }
        public int ManagerId { get; set; }
        public string EmailId { get; set; }
        public int salary { get; set; }

    }
}