import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../services/local.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router,private localService:LocalService) {
    
   }
  user:any;
  password:any;
  message:any;
  ngOnInit(): void {
  }

  login(){

    this.http.post("http://localhost:8000/login/"+this.user+"/"+this.password,{}, {responseType:'text' as 'json'})
         .subscribe((data:string) =>{
           console.log(localStorage.getItem("user_type"));
           localStorage.setItem("token", "value");
           this.localService.userType=data; 
          // console.log(this.password,this.user)
           if(data == "admin"){
           
            this.router.navigate(['admin'])}
           else if(data == "teachers"){this.router.navigate(['reports']);
           console.log(this.password,this.user);
          }
           else if(data === "students"){this.router.navigate(['showtostudentreport']) }
           else if(data === "customers"){this.router.navigate(['customer/home']) }
           else{this.router.navigate(['login'])}
           
         // this.router.navigate([data]);
         });

         

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }


 



}
