import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import{HttpClient} from '@angular/common/http';
import{Router} from '@angular/router';
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {
FormData:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }
projects;
  ngOnInit() {
    this.FormData=new FormGroup({
      ProjName:new FormControl('',[Validators.required]),
      StartDate:new FormControl('',[Validators.required]),
      Enddate:new FormControl('',[Validators.required]),
      ClientName:new FormControl('',[Validators.required])
     });
     console.log(this.FormData);
     this.onClickSubmit(this.projects);
    
  }
  onClickSubmit(projects){
    this.http.post("http://localhost:55860/api/Project",projects).subscribe(data=>{console.log('saved');
    this.router.navigate(['/project/showproject']);})

}
}
