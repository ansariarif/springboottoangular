import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }
   urlid:any;
   
   subjects:any;
   teacher:any={id:"", name:"",passowrd:"",gender:"",salary:"",active:""}
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let str_id = parseInt(params.get('id'));
      this.urlid = str_id;
    })

    this.getTeacherById(this.urlid);
   
    this.listOfAllSubject();
  }



 

  listOfAllSubject(){
    this.http.get("http://localhost:8000/subject").subscribe((data:any) => this.subjects=data);

  }

  getTeacherById(id){
         this.http.get("http://localhost:8000/teacher/"+id).subscribe((data:any) => this.teacher=data);
  }

  updateTeacher(teacher:any,id:any){
    
    this.http.put("http://localhost:8000/update/teacher/"+id,teacher,{responseType:'text' as 'json'})
         .subscribe((data:any) => this.teacher=data)
         this.router.navigate(['/teachers']);


  }

}
