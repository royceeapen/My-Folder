import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
@Component({
  selector: 'app-createmanager',
  templateUrl: './createmanager.component.html',
  styleUrls: ['./createmanager.component.css']
})
export class CreatemanagerComponent implements OnInit {
  FormData:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }
manager;
  ngOnInit() {
    this.FormData=new  FormGroup({
      comment:new FormControl('',[Validators.required]),
      tid:new FormControl('',[Validators.required])
     
    });

    console.log(this.FormData);
    
  }
  showemployees(){
    this.http.get("http://localhost:55860/api/Manager").subscribe(data=>{this.manager=data;
  });

}
onClickSubmit(manager){
  this.http.post("http://localhost:55860/api/Manager",manager).subscribe(data=>{console.log('saved');
    this.router.navigate(['/manager/showmanager']); });
}
}