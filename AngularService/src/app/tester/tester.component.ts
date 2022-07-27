import { Component, OnInit } from '@angular/core';
import { MathService } from '../math.service';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.css'],
  providers:[MathService]
})
export class TesterComponent implements OnInit {
   testcounter:number=0;
  constructor(private testmath:MathService) { }

  ngOnInit(): void {
  }

  increment4(){
    this.testmath.incrementCounter();
    this. testcounter= this.testmath.getCounter();
  }

}
