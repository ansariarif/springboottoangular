import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularpipe';

  
bookArray: Book[]=[
  new Book (126,"technology JaVa",456.56565665,new Date('23 Nov 1990')),
  new Book (124,"technology python",453.56565665,new Date('27 Nov 1990')),
  new Book (12,"infomation CSS",999.65665,new Date('25 Nov 1990')),
  new Book (14,"Web CSS",109.655,new Date('26 Nov 2021'))
];

orderProperty:string = 'bookId';

//sort(property: string):void{
 // this.orderProperty=property;
//}
//orderProperty:string = 'bookPrice';

  clickCount:number = 0;

  

  sort(property:string):void{
    this.clickCount = this.clickCount + 1;
    if(this.clickCount % 2 != 0){
      this.orderProperty = property;
      
    }
    else{
      this.orderProperty = property+' : true';
    }
  }

myIndex=0;

}



class Book{
  bookId:number;
  bookName:string;
  private bookprice:number;
  publishDate : Date;

  constructor(id:number,name:string,price:number,publishDate:Date){
    this.bookId=id;
    this.bookName=name;
    this.bookprice=price;
    this.publishDate=publishDate;
  }

  get bprice():number{
    return this.bookprice;

  }

  
set bprice(price:number){
  this.bookprice=price;
}

public searchFilter: any = '';
Students = [{
  "id": 1,
  "name": "Nathaniel Graham",
  "email": "nathaniel.graham@example.com"
},
{
  "id": 2,
  "name": "Avery Adams",
  "email": "avery.adams@example.com"
},
{
  "id": 3,
  "name": "Mario Stevens",
  "email": "mario.stevens@example.com"
},
{
  "id": 4,
  "name": "Constance Beck",
  "email": "constance.beck@example.com"
},
{
  "id": 5,
  "name": "Jimmie Little",
  "email": "jimmie.little@example.com"
},
{
  "id": 6,
  "name": "Avery Matthews",
  "email": "avery.matthews@example.com"
},
{
  "id": 7,
  "name": "Pat Sutton",
  "email": "pat.sutton@example.com"
},
{
  "id": 8,
  "name": "Danny Crawford",
  "email": "danny.crawford@example.com"
},
{
  "id": 9,
  "name": "Pearl Mccoy",
  "email": "pearl.mccoy@example.com"
},
{
  "id": 10,
  "name": "Flenn Wallace",
  "email": "flenn.wallace@example.com"
}
]



}



