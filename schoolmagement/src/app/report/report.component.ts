import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  reports:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllReprt();
  }

  getAllReprt(){
    this.http.get("http://localhost:8000/score").subscribe((data)=>this.reports=data);
 }


 deleteReport(id:number,index:number){

  this.http.delete("http://localhost:8000/delete/report/"+id).subscribe((data)=>{this.reports.splice(index,1)});
  
 }



}
