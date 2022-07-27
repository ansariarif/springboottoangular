import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feetostudent',
  templateUrl: './feetostudent.component.html',
  styleUrls: ['./feetostudent.component.css']
})
export class FeetostudentComponent implements OnInit {
  fee:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllFee();
  }

  getAllFee(){
    this.http.get("http://localhost:8000/fee").subscribe((data)=>this.fee=data);
 }

}
