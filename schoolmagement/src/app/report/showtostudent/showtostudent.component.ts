import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showtostudent',
  templateUrl: './showtostudent.component.html',
  styleUrls: ['./showtostudent.component.css']
})
export class ShowtostudentComponent implements OnInit {

  reports:any;
  name:any;
  student:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllReprt();
  }

  getAllReprt(){
    this.http.get("http://localhost:8000/score").subscribe((data)=>this.reports=data);
 }


 Search(){
  if(this.student.name == ""){
    this.ngOnInit();
  }else{
    this.reports = this.reports.filter(res =>{
      return res.student.name.toLocaleLowerCase().match(this.student.name.toLocaleLowerCase());
    });
  }
}

}
