import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {
  trainerCounter:number=0;
  constructor(private math:MathService) { }

  ngOnInit(): void {
  }

increment(){
  this.math.incrementCounter();
  this.trainerCounter= this.math.getCounter();
}

decrement1(){
  this.math.decrementCounter();
  this.trainerCounter=this.math.getCounter();
}

}
