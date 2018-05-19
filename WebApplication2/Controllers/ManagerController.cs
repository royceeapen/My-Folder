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
    public class ManagerController : ApiController
    {
        // GET: api/Manager
        public IEnumerable<Manager> Get()
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.manager.Select(emp => emp).ToList();
        }

        // GET: api/Manager/5
        public Manager Get(int id)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.manager.Where(p => p.mcid == id).FirstOrDefault();
        }

        // POST: api/Manager
        public void Post(Manager manager)
        {
            ManagerRepository.Create(manager);
        }

        // PUT: api/Manager/5
        public void Put(int id, Manager value)
        {
            value.mcid = id;
            ManagerRepository.Edit(value);
        }

        // DELETE: api/Manager/5
        public void Delete(int id)
        {
            Manager e = new Manager();
            e.mcid = id;
            ManagerRepository.Delete(id);
        }
    }
}
