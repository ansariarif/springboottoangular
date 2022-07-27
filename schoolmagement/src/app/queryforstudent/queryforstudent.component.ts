import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queryforstudent',
  templateUrl: './queryforstudent.component.html',
  styleUrls: ['./queryforstudent.component.css']
})
export class QueryforstudentComponent implements OnInit {
  query:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
    this.getAllQuery();
  }


  getAllQuery(){
    this.http.get("http://localhost:8000/query").subscribe((data)=>this.query=data);
 }


 aproveStatus(id:number){

  this.http.get("http://localhost:8000/query/"+id).subscribe((data)=>{this.query=data});
  
 }

 aproveStatusAgain(id:number){

  this.http.get("http://localhost:8000/query/reject/"+id).subscribe((data)=>{this.query=data});
  
 }
}
