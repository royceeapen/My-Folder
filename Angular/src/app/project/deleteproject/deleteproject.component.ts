import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';

@Component({
  selector: 'app-deleteproject',
  templateUrl: './deleteproject.component.html',
  styleUrls: ['./deleteproject.component.css']
})
export class DeleteprojectComponent implements OnInit {
  FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
  projects;
  ngOnInit() {
    
     this.loadProjects();
  }
  loadProjects(){
    this.http.get(`http://localhost:55860/api/Project/${this.id}`).subscribe(data=>{console.log(data);
    this.projects=data;
    this.FormData=new  FormGroup({
      ProjName:new FormControl(this.projects.ProjName,[]),
      StartDate:new FormControl(this.projects.StartDate,[]),
      Enddate:new FormControl(this.projects.Enddate,[]),
      ClientName:new FormControl(this.projects.ClientName,[])
     });
    })
  }
  onClickSubmit(projects){
    this.http.delete(`http://localhost:55860/api/Project/${this.id}`).subscribe(
      data=>{console.log('saved');
      this.router.navigate(['/project/showproject']);
    });
}
}