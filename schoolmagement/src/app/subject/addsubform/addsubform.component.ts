import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addsubform',
  templateUrl: './addsubform.component.html',
  styleUrls: ['./addsubform.component.css']
})
export class AddsubformComponent implements OnInit {
 

  subject:any={ name:""};
  message;any;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  addSubject(subject:any){
    this.http.post("http://localhost:8000/add/subject",subject,{responseType:'text' as 'json'})
                .subscribe((data:any) => this.subject=data);

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }

}
