import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-addmsgtostudent',
  templateUrl: './addmsgtostudent.component.html',
  styleUrls: ['./addmsgtostudent.component.css']
})
export class AddmsgtostudentComponent implements OnInit {
 
  notice:any={id:"", date:"",msg:""}
  message:any;
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  addNotice(notice:any){
    this.http.post("http://localhost:8000/add/notice",notice,{responseType:'text' as 'json'})
                .subscribe((data:any) => this.notice=data);

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }


}
