import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  
  teacher:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllTeacher();
  }


  


  getAllTeacher(){
     this.http.get("http://localhost:8000/teacher").subscribe((data)=>this.teacher=data);
  }


  deleteTeacher(id:number,index:number){

    this.http.delete("http://localhost:8000/delete/teacher/"+id).subscribe((data)=>{this.teacher.splice(index,1)});
    
   }

}
