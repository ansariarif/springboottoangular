import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showlogintocustomer',
  templateUrl: './showlogintocustomer.component.html',
  styleUrls: ['./showlogintocustomer.component.css']
})
export class ShowlogintocustomerComponent implements OnInit {
  customer:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllcustomer();
  }

  getAllcustomer(){
    this.http.get("http://localhost:8000/customer").subscribe((data)=>this.customer=data);
 }

}
 