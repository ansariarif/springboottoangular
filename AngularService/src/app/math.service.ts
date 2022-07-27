import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  counter:number=0;

 incrementCounter():void{
   this.counter++;
 }

 getCounter():number{
   return this.counter;
 }


 decrementCounter():void{
  this.counter--;
 }

}
