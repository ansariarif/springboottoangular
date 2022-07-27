import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-customerrupdate',
  templateUrl: './customerrupdate.component.html',
  styleUrls: ['./customerrupdate.component.css']
})
export class CustomerrupdateComponent implements OnInit {
  urlid:any;
  customer:any={id:"",date:"", name:"",password:"",age:"",subject:"",aprove:"",joiningdate:""}
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let str_id = parseInt(params.get('id'));
      this.urlid = str_id;
    })

    this.getcustomerById(this.urlid);
  }


  getcustomerById(id){
    this.http.get("http://localhost:8000/customer/"+id).subscribe((data:any) => this.customer=data);
}

updatecustomer(customer:any,id:any){

this.http.put("http://localhost:8000/update/customer/"+id,customer,{responseType:'text' as 'json'})
    .subscribe((data:any) => this.customer=data)
    this.router.navigate(['/customer']);


}

}
