import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-displayquerytostudent',
  templateUrl: './displayquerytostudent.component.html',
  styleUrls: ['./displayquerytostudent.component.css']
})
export class DisplayquerytostudentComponent implements OnInit {
  query:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllQuery();
  }

  getAllQuery(){
    this.http.get("http://localhost:8000/query").subscribe((data)=>this.query=data);
 }

}
