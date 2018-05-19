import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-showproject',
  templateUrl: './showproject.component.html',
  styleUrls: ['./showproject.component.css']
})
export class ShowprojectComponent implements OnInit {

  constructor(private http:HttpClient) { }
Project;
  ngOnInit() {
    this.loadProject();
  }
loadProject(){this.http.get("http://localhost:55860/api/Project").subscribe(data=>{console.log(data);
this.Project=data;});
}
}
