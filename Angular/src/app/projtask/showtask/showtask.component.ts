import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {

  constructor(private http:HttpClient) { }
pt;
  ngOnInit() {
    this.loadpt();
  }
  loadpt(){this.http.get("http://localhost:55860/api/ProjTask").subscribe(data=>{console.log(data);
  this.pt=data;});
}
}