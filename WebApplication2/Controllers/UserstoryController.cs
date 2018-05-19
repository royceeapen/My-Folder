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
    public class UserstoryController : ApiController
    {
        // GET: api/Userstory
        public IEnumerable<Userstory> Get()
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.userstory.Select(u => u).ToList();
        }

        // GET: api/Userstory/5
        public Userstory Get(int id)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.userstory.Where(p => p.userstoryid == id).FirstOrDefault();
        }

        // POST: api/Userstory
        public void Post(Userstory u)
        {
            UserstoryRepository.Create(u);
        }

        // PUT: api/Userstory/5
        public void Put(int id, Userstory value)
        {
            value.userstoryid = id;
            UserstoryRepository.Edit(value);
        }

        // DELETE: api/Userstory/5
        public void Delete(int id)
        {
            Userstory e = new Userstory();
            e.userstoryid = id;
            UserstoryRepository.Delete(id);
        }
    }
}
