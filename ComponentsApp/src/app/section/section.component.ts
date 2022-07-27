import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
animetype="anime movies";
num1 = 10;
num2 =20;

 // constructor() { }

  ngOnInit(): void {
  }

  title = 'this thane';

  constructor(){
    setTimeout(()=>this.title="Destination Station : Ghatkopar",6000); // updation in model data
  }

  changeTitle(){
    this.title="Destination Station : Mumbra"; //updation in model-data
  }

  show(){
    console.log(this.animetype);

  }

  
  mult(){
    return this.num1*this.num2;
  }

}
