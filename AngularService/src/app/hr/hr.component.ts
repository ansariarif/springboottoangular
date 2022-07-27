import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css'],
  providers:[MathService]
})
export class HRComponent implements OnInit {
  hrcounter:number=0;
  constructor(private hrmath:MathService) { }

  ngOnInit(): void {
  }

  increment3(){
    this.hrmath.incrementCounter();
    this.hrcounter = this.hrmath.getCounter();
  }

}
