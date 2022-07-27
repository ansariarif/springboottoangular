import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-addstudform',
  templateUrl: './addstudform.component.html',
  styleUrls: ['./addstudform.component.css']
})
export class AddstudformComponent implements OnInit {


  student:any={ name:"",std:"",password:"",contact:"",address:""};
  message:any;
  name:string="";
  std:number=0;
  conact:number=0;
  address:string="";
  registerationForm:FormGroup=new FormGroup({});
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.registerationForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      std:new FormControl("",[Validators.required, Validators.min(1), Validators.max(10)]),
      contact:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern("^[0-9]*$")]),
      address:new FormControl("",[Validators.required])
     
    });
  }

  addStudent(student:any){
    this.http.post("http://localhost:8000/add/student",student,{responseType:'text' as 'json'})
                .subscribe((data:any) => this.student=data);

  }

  get fname(){
    return this.registerationForm.get("name");
  }

  get uage(){
    return this.registerationForm.get("std");
  }

  get mobile(){
    return this.registerationForm.get("contact");
  }

  get addresss(){
    return this.registerationForm.get("address");
  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }

}
