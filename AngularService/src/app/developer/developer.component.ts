import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';
@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {
  developerCounter:number=0;
  constructor(private mymath: MathService) { }

  ngOnInit(): void {
  }

  increment2(){
    this.mymath.incrementCounter();
    this.developerCounter=this.mymath.getCounter();
  }

}
