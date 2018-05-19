using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Common;
using WebApplication2.Models;

namespace WebApplication2.Repository
{
    public class ManagerRepository
    {
        public static void Create(Manager comment)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Db.manager.Add(comment);
            Db.SaveChanges();
        }
        public static void Edit(Manager comment)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Manager c = Search(comment, Db);
            c.comment = comment.comment;
            c.tid = comment.tid;
            Db.SaveChanges();
        }
        public static void Delete(int mid)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            var manager = Db.manager.FirstOrDefault(s => s.mcid == mid);
            if (manager != null)
            {
                Db.manager.Remove(manager);
                Db.SaveChanges();
            }
        }
        public static List<Manager> ShowAll()
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            return (Db.manager.Select(comment => comment).ToList());
        }
        public static Manager Search(Manager comment, ProjectTrackingContest Db)
        {
            return (Db.manager.Select(s => s).Where(s => s.mcid == comment.mcid)).First();
        }
    }
}