import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  studArray:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchJsonData(){
    this.http.get("assets/studentinfo.json").subscribe(data=>this.studArray=data as string[],error=>console.log(error));
  }

}
