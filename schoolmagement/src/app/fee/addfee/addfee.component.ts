import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addfee',
  templateUrl: './addfee.component.html',
  styleUrls: ['./addfee.component.css']
})
export class AddfeeComponent implements OnInit {
  urlid:any;
  students:any
  fee:any={id:"", annualfee:"",tuitionfee:"",examfee:"",gamefee:"",developmentfee:"",totalfee:"",pending:"",rollno:""};
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.listOfAllStudent();
  }

  listOfAllStudent(){
    this.http.get("http://localhost:8000/student").subscribe((data:any) => this.students=data);

  }

  addFee(fee:any,rollno:any){
    
    this.http.post("http://localhost:8000/fee/"+rollno+"/student",fee,{responseType:'text' as 'json'})
           .subscribe();
           

           this.router.navigate(['fee']);

  }

}
