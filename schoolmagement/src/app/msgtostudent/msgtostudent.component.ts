import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msgtostudent',
  templateUrl: './msgtostudent.component.html',
  styleUrls: ['./msgtostudent.component.css']
})
export class MsgtostudentComponent implements OnInit {
  msg:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllMsg();
  }

  
  getAllMsg(){
    this.http.get("http://localhost:8000/notice").subscribe((data)=>this.msg=data);
    console.log(this.msg);
 }


}
