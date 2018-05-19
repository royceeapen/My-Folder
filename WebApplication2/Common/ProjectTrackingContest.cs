using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using WebApplication2.Models;

namespace WebApplication2.Common
{
    public class ProjectTrackingContest: DbContext
    {
        public ProjectTrackingContest() : base("Data Source=LAPTOP-6JMPBELM\\SQLEXPRESS;Initial Catalog=ProjectTracking1;Integrated Security=True")
        {
        }
        public DbSet<Employee> Employee { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<Userstory> userstory { get; set; }
        public DbSet<ProjTask> projtask { get; set; }
        public DbSet<Manager> manager { get; set; }
    }
}