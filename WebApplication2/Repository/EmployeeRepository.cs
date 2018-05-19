using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Common;
using WebApplication2.Models;

namespace WebApplication2.Repository
{
    public class EmployeeRepository
    {
        public static void Create(Employee e)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Db.Employee.Add(e);
            Db.SaveChanges();
        }
        public static Employee Search(Employee eid, ProjectTrackingContest Db)
        {
            return Db.Employee.Select(emp => emp).Where(emp => emp.employeeID == eid.employeeID).First();
        }
        public static void Edit(Employee e)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Employee e1 = Search(e, Db);
            e1.employeeID = e.employeeID;
            e1.FirstName = e.FirstName;
            e1.LastName = e.LastName;
            e1.Age = e.Age;
            e1.ManagerId = e.ManagerId;
            e1.EmailId = e.EmailId;
            e1.salary = e.salary;
            Db.SaveChanges();
        }
        public static void Delete(int eid)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            var Employee = Db.Employee.FirstOrDefault(s => s.employeeID == eid);
            if (Employee != null)
            {
                Db.Employee.Remove(Employee);
                Db.SaveChanges();
            }
        }
    }
}