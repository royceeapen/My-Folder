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
    public class ProjTaskController : ApiController
    {
        // GET: api/ProjTask
        public IEnumerable<ProjTask> Get()
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.projtask.Select(emp => emp).ToList();
        }

        // GET: api/ProjTask/5
        public ProjTask Get(int id)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.projtask.Where(p => p.tid == id).FirstOrDefault();
        }

        // POST: api/ProjTask
        public void Post(ProjTask p)
        {
            TaskRepository.Create(p);
        }

        // PUT: api/ProjTask/5
        public void Put(int id, ProjTask value)
        {
            value.tid = id;
            TaskRepository.Edit(value);
        }

        // DELETE: api/ProjTask/5
        public void Delete(int id)
        {
            ProjTask e = new ProjTask();
            e.tid= id;
            TaskRepository.Delete(id);
        }
    }
}
