import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }
  Read(path){
    const headers=new HttpHeaders({'Content-type':'application/json'});
    const httpOptions={headers:headers};
    return this.http.get(path,httpOptions);
  }
  create(path,object){
    const headers=new HttpHeaders({'Content-type':'application/json'});
    const httpOptions={headers:headers};
    return this.http.post(path,object,httpOptions);
  }
  update(path,object){
    const headers=new HttpHeaders({'Content-type':'application/json'});
    const httpOptions={headers:headers};
    return this.http.put(path,object,httpOptions);
  }
  delete(path){
    const headers=new HttpHeaders({'Content-type':'application/json'});
    const httpOptions={headers:headers};
    return this.http.delete(path,httpOptions);
  }
}
