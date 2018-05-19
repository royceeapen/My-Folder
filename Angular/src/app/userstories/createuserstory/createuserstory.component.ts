import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
@Component({
  selector: 'app-createuserstory',
  templateUrl: './createuserstory.component.html',
  styleUrls: ['./createuserstory.component.css']
})
export class CreateuserstoryComponent implements OnInit {
  FormData:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }
userstory;
  ngOnInit() {
    this.FormData=new  FormGroup({
      story:new FormControl('',[Validators.required]),
      ProjId:new FormControl('',[Validators.required])
    });

    console.log(this.FormData);
    //this.onClickSubmit(this.userstory);
  }
onClickSubmit(userstory){
  this.http.post("http://localhost:55860/api/Userstory",userstory).subscribe(data=>{console.log('saved');
    this.router.navigate(['/userstories/showuserstory']); });


  }

}
