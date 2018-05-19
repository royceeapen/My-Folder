import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators}from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import{Router} from '@angular/router';
//import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
FormData:FormGroup;
  constructor(private http:HttpClient,private router:Router) { }
  //constructor(private router:Router,private employeeService:EmployeeService){}
employees;
  ngOnInit() {
    this.FormData=new  FormGroup({
      FirstName:new FormControl('',[Validators.required]),
      LastName:new FormControl('',[Validators.required]),
      Age:new FormControl('',[Validators.required]),
      ManagerId:new FormControl('',[Validators.required]),
      EmailId:new FormControl('',[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      salary :new FormControl('',[Validators.required])
    });
 
    console.log(this.FormData);
    this.showemployees();
    
  }
  showemployees(){
    
   this.http.get("http://localhost:55860/api/Employee").subscribe(data=>{this.employees=data;
  
     }
   )
  
  }
  
onClickSubmit(employees){
  this.http.post("http://localhost:55860/api/Employee",employees).subscribe(data=>{console.log('saved');
  
  this.router.navigate(['/employees/showemployees']);})

    
}

}





