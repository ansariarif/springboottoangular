import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  name:string="";
  age:number=0;
  mobileNumber:number=0;
  emailId:string="";
  userName:string="";
  password:string="";
  confirmPassword:string="";
  registerationForm:FormGroup=new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.registerationForm=new FormGroup({
      name:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      age:new FormControl("",[Validators.required, Validators.min(1), Validators.max(120)]),
      mobileNumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(12),Validators.pattern("^[0-9]*$")]),
      emailId:new FormControl("",[Validators.required,Validators.email]),
      userName:new FormControl("",[Validators.required,Validators.minLength(4),Validators.maxLength(20),Validators.pattern("^[A-Za-z]+$")]),
      password:new FormControl("",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      confirmPassword:new FormControl("",[Validators.required]),
    },
    { validators:this.matchPassword }
    );
  }

  get fname(){
    return this.registerationForm.get("name");
  }

  get uage(){
    return this.registerationForm.get("age");
  }

  get mobile(){
    return this.registerationForm.get("mobileNumber");
  }

  get email(){
    return this.registerationForm.get("emailId");
  }

  get usrname(){
    return this.registerationForm.get("userName");
  }

  get usrpass(){
    return this.registerationForm.get("password");
  }

  get usrconfirmpass(){
    return this.registerationForm.get("confirmPassword");
  }

  

  registerFun():void{
    console.log(this.registerationForm.value);
  }


  private matchPassword(regForm:FormGroup):any{
    let passControl=regForm.get("password");
    let confirmpassControl=regForm.get("confirmPassword");
    if(passControl.value==confirmpassControl.value)
             return null;
    else
          return{passMismatch:true};         


  }

}
