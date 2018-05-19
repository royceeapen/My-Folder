using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Common;
using WebApplication2.Models;

namespace WebApplication2.Repository
{
    public class ProjtRepository
    {
        public static void Create(Project p)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Db.Project.Add(p);
            Db.SaveChanges();
        }
        public static Project Search(Project pid, ProjectTrackingContest Db)
        {
            return Db.Project.Select(p => p).Where(p => p.ProjId == pid.ProjId).First();
        }
        public static void Edit(Project p)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Project e1 = Search(p, Db);
            e1.ProjId = p.ProjId;
            e1.ProjName = p.ProjName;
            e1.StartDate = p.StartDate;
            e1.Enddate = p.Enddate;
            e1.ClientName = p.ClientName;

            Db.SaveChanges();
        }
        public static void Delete(int pid)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            var Project = Db.Project.FirstOrDefault(s => s.ProjId == pid);
            if (Project != null)
            {
                Db.Project.Remove(Project);
                Db.SaveChanges();
            }
        }
        }
}