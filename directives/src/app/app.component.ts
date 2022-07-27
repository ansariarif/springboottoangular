import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives';
  age=0;
  choice = 0;
  numArray = [23,34,45,67,89,43,76];

  addelement(ele:string):void{
    this.numArray.push((parseInt(ele)));
  }

  removeElement():number | undefined{
    return this.numArray.pop();
  }

  bookAarray: Book[]=[
    new Book(123,"java",768,['xzy','abc']),
    new Book(13,"python",778,['om','sai']),
    new Book(23,"html",500,['rahul','sumit'])
  ];

  myColor:string='black';
  textColor:string='black';

  paraColor:string='black';
  paraFont:number=15;

  myStyle={
        'color':this.paraColor,
        'background-color':'gray',
        'font-size.px':this.paraFont,
        'border':'blue solid 2px'

  }

  update1(newColor:string){
    this.myStyle.color=newColor;
  }

  update2(newFont:string){
    this.myStyle['font-size.px']=parseInt(newFont);
  }

  myClass={borderClass:false,decorateClass:true};
  myArray=['borderClass','decorateClass'];
 
  imageSource="assets/Myimage/goku.jpg";
  imageheight=300;
  imageWidth=400;

  zoomin(){
    this.imageheight=this.imageheight+10;
    this.imageWidth=this.imageWidth+10;
  }

  zoomout(){
    this.imageheight=this.imageheight-10;
    this.imageWidth=this.imageWidth-10;
  }

  cityArray=['mumbai','thane','navi mumbai','vashi'];
}

class Book{
  bookid:number;
  bookName:string;
  private bookPrice:number;
  authorName:string[];

  constructor(id:number, name:string,price:number,authors:string[]){
    this.bookid=id;
    this.bookName=name;
    this.bookPrice=price;
    this.authorName=authors;
  }



get bprice():number{
  return this.bookPrice;
}

set bprice(price:number){
  this.bookPrice=price;
}

}