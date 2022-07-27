import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addqueryforstudent',
  templateUrl: './addqueryforstudent.component.html',
  styleUrls: ['./addqueryforstudent.component.css']
})
export class AddqueryforstudentComponent implements OnInit {
  
  query:any={ date:"",reason:"",aprove:""};
  message:any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addQuery(query:any){
    this.http.post("http://localhost:8000/add/query/",this.query,{responseType:'text' as 'json'})
         .subscribe((data:any) => this.query=data);

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }

}
