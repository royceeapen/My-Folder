import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-showmanager',
  templateUrl: './showmanager.component.html',
  styleUrls: ['./showmanager.component.css']
})
export class ShowmanagerComponent implements OnInit {

  constructor(private http:HttpClient) { }
manager;
  ngOnInit() {
    this.loadmanager();
  }
  loadmanager(){
    this.http.get("http://localhost:55860/api/Manager").subscribe(data=>{console.log(data);
    this.manager=data;})
}
}
