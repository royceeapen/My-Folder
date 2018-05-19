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
    public class ProjectController : ApiController
    {
        // GET: api/Project
        public IEnumerable<Project> Get()
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.Project.Select(p => p).ToList();
        }

        // GET: api/Project/5
        public Project Get(int id)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return Db.Project.Where(p => p.ProjId == id).FirstOrDefault();
        }

        // POST: api/Project
        public void Post(Project p)
        {
            ProjtRepository.Create(p);
        }

        // PUT: api/Project/5
        public void Put(int id, Project value)
        {
            value.ProjId = id;
            ProjtRepository.Edit(value);
        }

        // DELETE: api/Project/5
        public void Delete(int id)
        {
            Project e = new Project();
            e.ProjId = id;
            ProjtRepository.Delete(id);
        }
    }
}
