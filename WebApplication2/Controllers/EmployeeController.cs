using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication2.Common;
using WebApplication2.Models;
using WebApplication2.Repository;

namespace WebApplication2.Controllers
{
    public class EmployeeController : ApiController
    {
        // GET: api/Employee
        public IEnumerable<Employee> Get()
        {

            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.Employee.Select(emp => emp).ToList();
        }

        // GET: api/Employee/5
        public Employee Get(int id)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.Employee.Where(p => p.employeeID == id).FirstOrDefault();
        }

        // POST: api/Employee
        public void Post(Employee employee)
        {
            EmployeeRepository.Create(employee);
        }

        // PUT: api/Employee/5
        public void Put(int id, Employee value)
        {
            value.employeeID = id;
            EmployeeRepository.Edit(value);
        }

        // DELETE: api/Employee/5
        public void Delete(int id)
        {
            Employee e = new Employee();
            e.employeeID = id;
            EmployeeRepository.Delete(id);
        }
    }
}
