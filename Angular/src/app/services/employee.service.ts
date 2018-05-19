import { Injectable } from '@angular/core';
import{CrudService} from './crud.service';
import{Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
baseUrl='http://localhost:55860';
private employee=new Subject<any>();
employee$=this.employee.asObservable(); //for observing any changes it will notify,if ti connected to observer it get notify
  
private ErrorResponse=new Subject<any>();           //error
ErrorResponse$=this.ErrorResponse.asObservable(); 

constructor(private crudService:CrudService) { }

  getAllemployee(){
    const url=`${this.baseUrl}/api/Employee`;
    this.crudService.Read(url).subscribe(data=>{
      this.employee.next(data); //next means giving to observer
    },error=>{
      console.log(error);
      this.ErrorResponse.next(error);
    });
  }
  createemployee(){
    const url=`${this.baseUrl}/api/Employee`;
    this.crudService.create(url,this.employee).subscribe(
      data=>{},error=>{
        console.log(error);
        this.ErrorResponse.next(error);
      }
    )
  }
  }

