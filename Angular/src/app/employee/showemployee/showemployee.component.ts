import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-showemployee',
  templateUrl: './showemployee.component.html',
  styleUrls: ['./showemployee.component.css']
})
export class ShowemployeeComponent implements OnInit {

  constructor(private employeeService:EmployeeService) { }
  employees;
  ngOnInit() {
    this.employeeService.employee$.subscribe(data=>{this.employees=data;
    console.log(data);
  });
  
    this.employeeService.ErrorResponse$.subscribe(message=>{
    console.log(message);
    alert(message);
  });
    this.employeeService.getAllemployee();
}
}