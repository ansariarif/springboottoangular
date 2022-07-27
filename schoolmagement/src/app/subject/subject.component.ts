import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  
  subject:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllSubject();
  }


  getAllSubject(){
    this.http.get("http://localhost:8000/subject").subscribe((data)=>this.subject=data);
 }


 deleteSubject(id:number,index:number){

   this.http.delete("http://localhost:8000/delete/subject/"+id).subscribe((data)=>{this.subject.splice(index,1)});
   
  }

}
