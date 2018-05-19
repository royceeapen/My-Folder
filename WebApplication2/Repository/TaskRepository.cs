using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Common;
using WebApplication2.Models;

namespace WebApplication2.Repository
{
    public class TaskRepository
    {
        
        public static void Create(ProjTask p)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Db.projtask.Add(p);
            Db.SaveChanges();
        }
        public static void Edit(ProjTask t)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            ProjTask ta = SearchById(t, Db);
            ta.assignedto = t.assignedto;
            ta.startdate = t.startdate;
            ta.enddate = t.enddate;
            ta.completion = t.completion;
            ta.userstoryid = t.userstoryid;
            Db.SaveChanges();
        }
        public static ProjTask SearchById(ProjTask ta, ProjectTrackingContest Db)
        {
            return (Db.projtask.Select(t => t).Where(t => t.tid == ta.tid)).First();
        }
        public static void Delete(int tid)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            var protask = Db.projtask.FirstOrDefault(u => u.tid == tid);
            if (protask != null)
            {
                Db.projtask.Remove(protask);
                Db.SaveChanges();
            }
        }
    }
}