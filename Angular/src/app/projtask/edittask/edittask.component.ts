import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';
@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  pt;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.FormData=new  FormGroup({
      assignedto:new FormControl('',[]),
      startdate:new FormControl('',[]),
      enddate:new FormControl('',[]),
      completion:new FormControl('',[]),
      userstoryid:new FormControl('',[])
      
    });
    this.loadpt();
  }
  loadpt(){
    this.http.get(`http://localhost:55860/api/ProjTask/${this.id}`).subscribe(data=>{console.log(data);
    this.pt=data;
    this.FormData=new  FormGroup({
      assignedto:new FormControl(this.pt.assignedto,[]),
      startdate:new FormControl(this.pt.startdate,[]),
      enddate:new FormControl(this.pt.enddate,[]),
      completion:new FormControl(this.pt.completion,[]),
      userstoryid:new FormControl(this.pt.userstoryid,[])
      
    });
  })
}
onClickSubmit(pt){
  this.http.put(`http://localhost:55860/api/ProjTask/${this.id}`,pt).subscribe(
    data=>{console.log('saved');
    this.router.navigate(['/projtask/showprojtask']);
  });
}
}