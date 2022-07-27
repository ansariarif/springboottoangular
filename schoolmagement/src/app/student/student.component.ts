import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  student:any;
  name:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllSubject();
  }

  getAllSubject(){
    this.http.get("http://localhost:8000/student").subscribe((data)=>this.student=data);
 }


 deleteStudent(id:number,index:number){

   this.http.delete("http://localhost:8000/delete/student/"+id).subscribe((data)=>{this.student.splice(index,1)});
   
  }

  Search(){
    if(this.name == ""){
      this.ngOnInit();
    }else{
      this.student = this.student.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      });
    }
  }


 

}
