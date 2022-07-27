import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'source Station: Thane';

  num1:number=98;
  num2:number=70;
  companyname="neosoft technology";

  constructor(){
    setTimeout(()=>this.title="Destination Station : Ghatkopar",6000); // updation in model data
  }

  changeTitle(){
    this.title="Destination Station : Mumbra"; //updation in model-data
  }

  mult(){
    return this.num1*this.num2;
  }

  greet(){
    console.log("methos called from view");
  }

  showinfo($event:any):void{
    console.log($event);
  }

  

  show(){
    console.log(this.companyname);
  }
}
