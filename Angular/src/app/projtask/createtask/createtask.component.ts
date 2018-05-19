import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';

@Component({
  selector: 'app-createtask',
  templateUrl: './createtask.component.html',
  styleUrls: ['./createtask.component.css']
})
export class CreatetaskComponent implements OnInit {
  FormData:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }
pt;
  ngOnInit() {
    this.FormData=new  FormGroup({
      assignedto:new FormControl('',[Validators.required]),
      startdate:new FormControl('',[Validators.required]),
      enddate:new FormControl('',[Validators.required]),
      completion:new FormControl('',[Validators.required]),
      userstoryid:new FormControl('',[Validators.required])
      
    });
    console.log(this.FormData);
    //this.onClickSubmit(this.pt);
  }
  onClickSubmit(pt){
    this.http.post("http://localhost:55860/api/ProjTask",pt).subscribe(data=>{console.log('saved');
      this.router.navigate(['/projtask/showprojtask']); });
}
}