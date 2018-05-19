using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Common;
using WebApplication2.Models;

namespace WebApplication2.Repository
{
    public class UserstoryRepository
    {
        public static void Create(Userstory u)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Db.userstory.Add(u);
            Db.SaveChanges();
        }
        public static Userstory Search(Userstory uid, ProjectTrackingContest Db)
        {
            return Db.userstory.Select(u => u).Where(u => u.userstoryid == uid.userstoryid).First();
        }
        public static void Edit(Userstory u)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            Userstory e1 = Search(u, Db);
            e1.userstoryid = u.userstoryid;
            e1.story = u.story;
            e1.ProjId = u.ProjId;

            Db.SaveChanges();
        }
        public static void Delete(int uid)
        {
            ProjectTrackingContest Db = new ProjectTrackingContest();
            var user = Db.userstory.FirstOrDefault(u => u.userstoryid == uid);
            if (user != null)
            {
                Db.userstory.Remove(user);
                Db.SaveChanges();
            }
        }
    }
}