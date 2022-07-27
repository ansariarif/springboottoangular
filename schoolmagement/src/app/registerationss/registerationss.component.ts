import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registerationss',
  templateUrl: './registerationss.component.html',
  styleUrls: ['./registerationss.component.css']
})
export class RegisterationssComponent implements OnInit {
  customer:any={ name:"",password:"",subject:""};
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  addCustomer(customer:any){
    this.http.post("http://localhost:8000/add/customer",customer,{responseType:'text' as 'json'})
                .subscribe((data:any) => this.customer=data);
                this.router.navigate(['/login']);
  }

}
