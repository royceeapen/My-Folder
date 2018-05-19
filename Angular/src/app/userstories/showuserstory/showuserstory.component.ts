import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-showuserstory',
  templateUrl: './showuserstory.component.html',
  styleUrls: ['./showuserstory.component.css']
})
export class ShowuserstoryComponent implements OnInit {

  constructor(private http:HttpClient) { }
  Userstory;
  ngOnInit() {
    this.loadUserstory();
  }
  loadUserstory(){this.http.get("http://localhost:55860/api/Userstory").subscribe(data=>{console.log(data);
  this.Userstory=data;});}
}
