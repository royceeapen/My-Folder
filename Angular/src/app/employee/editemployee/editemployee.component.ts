import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute,ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validators, Form}from '@angular/forms';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  FormData:FormGroup;
id=this.route.snapshot.paramMap.get('id');
employees;
  constructor(private route:ActivatedRoute,private router:Router,private http:HttpClient) { }

  ngOnInit() {
    this.FormData=new  FormGroup({
      FirstName:new FormControl('',[]),
      LastName:new FormControl('',[]),
      Age:new FormControl('',[]),
      ManagerId:new FormControl('',[]),
      EmailId:new FormControl('',[]),
      salary :new FormControl('',[])
    });
    this.loadEmployees();
    this.showemployees();
  }
  loadEmployees(){
    this.http.get(`http://localhost:55860/api/Employee/${this.id}`).subscribe(data=>{console.log(data);
    this.employees=data;
    this.FormData=new  FormGroup({
      FirstName:new FormControl(this.employees.FirstName,[Validators.required]),
      LastName:new FormControl(this.employees.LastName,[Validators.required]),
      Age:new FormControl(this.employees.Age,[Validators.required]),
      ManagerId:new FormControl(this.employees.ManagerId,[Validators.required]),
      EmailId:new FormControl(this.employees.EmailId,[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      salary :new FormControl(this.employees.salary,[Validators.required])
    });
  })
  }
  showemployees(){
    this.http.get("http://localhost:55860/api/Employee").subscribe(data=>{this.employees=data;
  });
  }

  onClickSubmit(employees){
    this.http.put(`http://localhost:55860/api/Employee/${this.id}`,employees).subscribe(
      data=>{console.log('saved');
      this.router.navigate(['/employee']);
      this.router.navigate(['/employees/showemployees']);
    });
  }
}
