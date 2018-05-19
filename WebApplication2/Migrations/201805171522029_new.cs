namespace WebApplication2.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class _new : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Managers",
                c => new
                    {
                        mcid = c.Int(nullable: false, identity: true),
                        comment = c.String(),
                        tid = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.mcid)
                .ForeignKey("dbo.ProjTasks", t => t.tid, cascadeDelete: true)
                .Index(t => t.tid);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Managers", "tid", "dbo.ProjTasks");
            DropIndex("dbo.Managers", new[] { "tid" });
            DropTable("dbo.Managers");
        }
    }
}
