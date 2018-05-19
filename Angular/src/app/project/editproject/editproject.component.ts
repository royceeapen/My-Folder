import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }
projects;
  ngOnInit() {
    this.FormData=new  FormGroup({
      ProjName:new FormControl('',[]),
      StartDate:new FormControl('',[]),
      Enddate:new FormControl('',[]),
      ClientName:new FormControl('',[])
     });
     this.loadProjects();
  }
  loadProjects(){
    this.http.get(`http://localhost:55860/api/Project/${this.id}`).subscribe(data=>{console.log(data);
    this.projects=data;
    this.FormData=new  FormGroup({
      ProjName:new FormControl(this.projects.ProjName,[Validators.required]),
      StartDate:new FormControl(this.projects.StartDate,[Validators.required]),
      Enddate:new FormControl(this.projects.Enddate,[Validators.required]),
      ClientName:new FormControl(this.projects.ClientName,[Validators.required])
     });
    })
  }
  onClickSubmit(projects){
    this.http.put(`http://localhost:55860/api/Project/${this.id}`,projects).subscribe(
      data=>{console.log('saved');
      this.router.navigate(['/project/showproject']);
    });
}
}
