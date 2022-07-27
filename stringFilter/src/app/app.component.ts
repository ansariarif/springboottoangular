import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'stringFilter';



  constructor() { }

  ngOnInit(): void {
  }

  public stringFilter:string = '';
  public str:any='';

  books: Book[] = [
    new Book(123,"Java COre",5789.4,new Date('16 Nov 1999 12:22:22')),
    new Book(127,"PythoN ReF",552789.42,new Date('9 Nov 19 4:16:24')),
    new Book(125,"C++ reF",89.4232334,new Date('16 Nov 1999')),
    new Book(121,"Java rEf",789.434556,new Date('16 Nov 1999'))
  ];

  orderProperty:string = 'bookId';
  reverse = false;



  sort(property:string){
    this.reverse  = !this.reverse;
    this.orderProperty = property;
  }

}
class Book{
  bookId:number;
  bookName:string;
  bookPrice:number;
  publish : Date;

  constructor(  id:number,
    name:string,
    price:number,
    publish:Date){
      this.bookId = id;
      this.bookName = name;
      this.bookPrice = price;
      this.publish = publish;
    }

    get bprice():number{
      return this.bookPrice;
    }

    set bprice(price:number){
      this.bookPrice = price;
    }
}

