import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {
  
  fee:any//={ annualfee:"",tuitionfee:"",examfee:"",gamefee:"",developmentfee:"",totalfee:"",pending:"",rollno:""};
  student:any;
  
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.getAllFee();
  }

  getAllFee(){
    this.http.get("http://localhost:8000/fee").subscribe((data)=>this.fee=data);
 }

 deleteFee(id:number,index:number){

  this.http.delete("http://localhost:8000/delete/fee/"+id).subscribe((data)=>{this.fee.splice(index,1)});
  
 }

}
