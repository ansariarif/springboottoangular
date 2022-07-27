import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foodmenus',
  templateUrl: './foodmenus.component.html',
  styleUrls: ['./foodmenus.component.css']
})
export class FoodmenusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  foodArray:Food[]=[
    new Food(111,'buerger',100),
    new Food(112,'pizza',120),
    new Food(113,'pasta',160),
    new Food(114,'pav-bhaji',200)
  ]

}

class Food{
  foodId:number;
  foodName:string;
  foodPrice:number;

  constructor(id:number,name:string,price:number){
    this.foodId=id;
    this.foodName=name;
    this.foodPrice=price;
  }
}
