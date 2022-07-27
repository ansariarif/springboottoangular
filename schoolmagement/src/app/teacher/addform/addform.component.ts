import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  
  teacher:any={ name:"",passowrd:"",gender:"",salary:"",subjectid:""};
  subjects:any;
  message:boolean=false;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    this.listOfAllSubject();
  }


  addTeacher(teacher:any,subjectid:any){
    this.http.post("http://localhost:8000/add/teacher/"+subjectid+"/subject",teacher,{responseType:'text' as 'json'}).subscribe((data:any) => this.teacher=data);

  }

  
  listOfAllSubject(){
    this.http.get("http://localhost:8000/subject").subscribe((data:any) => this.subjects=data);

  }

  SaveData(){
    this.message=true;
    
  }

  removemsg(){
    this.message=false;
  }

}
