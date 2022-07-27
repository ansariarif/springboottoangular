import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ngfor';

  numArray  = [1,9,22,23,24,25,5,6,3,7,4,8];
  num1 = 90;
  num2 = 80;
  num3 = 70;
  age=0;



  percentage1:number = 0;
  percent1(n1:string,n2:string,n3:string){
    this.percentage1 = (((parseInt(n1) + parseInt(n2) + parseInt(n3))*100)/300);
  }


  passType:string="password";
  show(){
    if(this.passType == "text"){
      this.passType = "password";
    }
    else{
      this.passType = "text";
    }
  }
}
