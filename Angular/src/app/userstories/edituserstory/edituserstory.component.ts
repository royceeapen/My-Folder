import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';
@Component({
  selector: 'app-edituserstory',
  templateUrl: './edituserstory.component.html',
  styleUrls: ['./edituserstory.component.css']
})
export class EdituserstoryComponent implements OnInit {
  FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  userstory;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.FormData=new  FormGroup({
      story:new FormControl('',[]),
      ProjId:new FormControl('',[])
    });

    console.log(this.FormData);
    this.loaduserstory();
  }
  loaduserstory(){
    this.http.get(`http://localhost:55860/api/Userstory/${this.id}`).subscribe(data=>{console.log(data);
    this.userstory=data;
    this.FormData=new  FormGroup({
      story:new FormControl(this.userstory.story,[Validators.required]),
      ProjId:new FormControl(this.userstory.ProjId,[Validators.required])
      
    });
  })
  }

  onClickSubmit(userstory){
    this.http.put(`http://localhost:55860/api/Userstory/${this.id}`,userstory).subscribe(
      data=>{console.log('saved');
      this.router.navigate(['/userstories/showuserstory']);
    });
}
}
