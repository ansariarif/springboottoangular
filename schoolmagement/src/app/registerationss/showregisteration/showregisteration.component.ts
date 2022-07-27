import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showregisteration',
  templateUrl: './showregisteration.component.html',
  styleUrls: ['./showregisteration.component.css']
})
export class ShowregisterationComponent implements OnInit {
  customer:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllcustomer();
  }

  getAllcustomer(){
    this.http.get("http://localhost:8000/customer").subscribe((data)=>this.customer=data);
 }


 aproveStatus(id:number){

  this.http.get("http://localhost:8000/customer/aprove/"+id).subscribe((data)=>{this.customer=data});
  
 }

 aproveStatusAgain(id:number){

  this.http.get("http://localhost:8000/customer/reject/"+id).subscribe((data)=>{this.customer=data});
  
 }

} 
