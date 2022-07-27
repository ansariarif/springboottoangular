import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-addreport',
  templateUrl: './addreport.component.html',
  styleUrls: ['./addreport.component.css']
})
export class AddreportComponent implements OnInit {

   urlid:any;
   students:any;
   subjects:any;
   report:any={id:"", attendence:"",score:"",rollno:"",subjectid:""}
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.listOfAllStudent();
    this.listOfAllSubject();
  }

  
  listOfAllStudent(){
    this.http.get("http://localhost:8000/student").subscribe((data:any) => this.students=data);

  }

  listOfAllSubject(){
    this.http.get("http://localhost:8000/subject").subscribe((data:any) => this.subjects=data);

  }

  addReport(report:any,rollno:any=2,subjectid:any=1){
    console.log(rollno);
    console.log(subjectid);
    console.log(report);
    this.http.post("http://localhost:8000/projects/"+rollno+"/students/"+subjectid+"/subject",report,{responseType:'text' as 'json'})
           .subscribe();
           

           this.router.navigate(['reports']);

  }

 

}
