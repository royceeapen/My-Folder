import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';
@Component({
  selector: 'app-editmanager',
  templateUrl: './editmanager.component.html',
  styleUrls: ['./editmanager.component.css']
})
export class EditmanagerComponent implements OnInit {
  FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  manager;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.FormData=new  FormGroup({
      comment:new FormControl('',[]),
      tid:new FormControl('',[])
      
    });
    this.loadmanager();
  }
  loadmanager(){
    this.http.get(`http://localhost:55860/api/Manager/${this.id}`).subscribe(data=>{console.log(data);
    this.manager=data;
    this.FormData=new  FormGroup({
      comment:new FormControl(this.manager.comment,[Validators.required]),
      tid:new FormControl(this.manager.tid,[Validators.required])
      
    });
  })
}
showmanager(){
  this.http.get("http://localhost:55860/api/Manager").subscribe(data=>{this.manager=data;
});
}
onClickSubmit(manager){
  this.http.put(`http://localhost:55860/api/Manager/${this.id}`,manager).subscribe(
    data=>{console.log('saved');
    this.router.navigate(['/manager/showmanager']);
  });
}
}
