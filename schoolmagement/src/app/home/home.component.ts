import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isAdmin:boolean=false;
  isTeacher:boolean=false;
  isStudent:boolean=false;
  isCustomer:Boolean=false;
  userType:string;
  constructor(private http:HttpClient, private router:Router,private localService:LocalService) { 
    console.log(this.localService.userType);
    this.userType=this.localService.userType;
    // this.userType=="admin"?this.isAdmin=true:this.userType=="teachers"?this.isTeacher=true:this.isStudent=true;
     this.userType=="admin"?this.isAdmin=true:this.userType=="teachers"?this.isTeacher=true:this.userType=="students"?this.isStudent=true:this.isCustomer=true;
  }

  ngOnInit(): void {
  }

  logout(){
    
    localStorage.removeItem("token");
    //this.http.get("http://localhost:8000/logout" ,{responseType:'text' as 'json'}).subscribe((data) =>this.router.navigate([data]));
    this.router.navigate(["/login"]);
  }

}
