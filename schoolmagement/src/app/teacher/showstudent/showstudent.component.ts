import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showstudent',
  templateUrl: './showstudent.component.html',
  styleUrls: ['./showstudent.component.css']
})
export class ShowstudentComponent implements OnInit {
  student:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.getAllSubject();
  }

  getAllSubject(){
    this.http.get("http://localhost:8000/student").subscribe((data)=>this.student=data);
 }

}
