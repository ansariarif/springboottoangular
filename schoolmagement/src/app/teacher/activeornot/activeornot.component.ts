import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activeornot',
  templateUrl: './activeornot.component.html',
  styleUrls: ['./activeornot.component.css']
})
export class ActiveornotComponent implements OnInit {
  teacher:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllTeacher();
  } 


  getAllTeacher(){
    this.http.get("http://localhost:8000/teacher").subscribe((data)=>this.teacher=data);
 }


 aproveStatus(id:number){

  this.http.get("http://localhost:8000/active/"+id).subscribe((data)=>{this.teacher=data});
  
 }

}
