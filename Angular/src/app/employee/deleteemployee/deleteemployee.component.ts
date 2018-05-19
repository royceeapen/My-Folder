import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';
@Component({
  selector: 'app-deleteemployee',
  templateUrl: './deleteemployee.component.html',
  styleUrls: ['./deleteemployee.component.css']
})
export class DeleteemployeeComponent implements OnInit {
 FormData:FormGroup;
  id=this.route.snapshot.paramMap.get('id');
  employees;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    
    this.loadEmployees();
  }
  loadEmployees(){
    this.http.get(`http://localhost:55860/api/Employee/${this.id}`).subscribe(data=>{console.log(data);
    this.employees=data;
    this.FormData=new  FormGroup({
      FirstName:new FormControl(this.employees.FirstName,[]),
      LastName:new FormControl(this.employees.LastName,[]),
      Age:new FormControl(this.employees.Age,[]),
      ManagerId:new FormControl(this.employees.ManagerId,[]),
      DOB:new FormControl(this.employees.DOB,[]),
      salary :new FormControl(this.employees.salary,[])
    });
  })

}
onClickSubmit(employees){
  this.http.delete(`http://localhost:55860/api/Employee/${this.id}`).subscribe(
    data=>{console.log('saved');
    
    this.router.navigate(['/employees/showemployees']);
  });
}
}
