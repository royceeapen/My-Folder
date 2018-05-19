import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';
@Component({
  selector: 'app-deletemanager',
  templateUrl: './deletemanager.component.html',
  styleUrls: ['./deletemanager.component.css']
})
export class DeletemanagerComponent implements OnInit {
  FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  manager;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    
    this.loadmanager();
  }
  loadmanager(){
    this.http.get(`http://localhost:55860/api/Manager/${this.id}`).subscribe(data=>{console.log(data);
    this.manager=data;
    this.FormData=new  FormGroup({
      comment:new FormControl(this.manager.comment,[]),
      tid:new FormControl(this.manager.tid,[])
      
    });
  })
}
showmanager(){
  this.http.get("http://localhost:55860/api/Manager").subscribe(data=>{this.manager=data;
});
}
onClickSubmit(manager){
  this.http.delete(`http://localhost:55860/api/Manager/${this.id}`).subscribe(
    data=>{console.log('saved');
    this.router.navigate(['/manager/showmanager']);
  });
}
}
