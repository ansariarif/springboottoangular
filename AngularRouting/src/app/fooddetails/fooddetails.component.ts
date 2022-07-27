import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fooddetails',
  templateUrl: './fooddetails.component.html',
  styleUrls: ['./fooddetails.component.css']
})
export class FooddetailsComponent implements OnInit {
     temp:string | null;
     foodId:number=0;
     foodName:string | null;
     detailObj:FoodDetails | undefined;
  constructor(private activeRout:ActivatedRoute) {
               //extract the rout parameters
               //snapshot method // obervable method
              this.temp =  activeRout.snapshot.paramMap.get("fid");
              if(this.temp != null)
                    this.foodId=parseInt(this.temp);
               this.foodName = activeRout.snapshot.paramMap.get("fname");
                this.findDetails();



   }

  ngOnInit(): void {
  }

  FoodArrayDetails:FoodDetails[]=[
    new FoodDetails(111,'veg','mixed vegetable with  garlic frecnh beans'),
    new FoodDetails(112,'non-veg','mixed vegetable with  garlic frecnh beans cavagee'),
    new FoodDetails(113,'veg','mixed vegetable with  garlic itain pasta frecnh beans soya suac'),
    new FoodDetails(114,'veg','with 5 pav and one plate bhaji  with extra maska')

  ];


findDetails():void{

  this.detailObj= this.FoodArrayDetails.find(detail => detail.foodId==this.foodId);
      
}

}

class FoodDetails{
  foodId:Number;
  foodType:string;
 foodcontens:string;

 constructor(id:Number,ftype:string, fcontent:string){
   this.foodId=id;
   this.foodType=ftype;
   this.foodcontens=fcontent;

 }

}
