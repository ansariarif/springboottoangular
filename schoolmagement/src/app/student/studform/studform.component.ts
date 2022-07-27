import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-studform',
  templateUrl: './studform.component.html',
  styleUrls: ['./studform.component.css']
})
export class StudformComponent implements OnInit {

  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  urlid:any;
  student:any={id:"", name:"",std:"",password:"",contact:"",address:""}

  ngOnInit(): void {

    
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let str_id = parseInt(params.get('id'));
      this.urlid = str_id;
    })

    this.getStudentById(this.urlid);
  }


  
  getStudentById(id){
    this.http.get("http://localhost:8000/student/"+id).subscribe((data:any) => this.student=data);
}

updateStudent(student:any,id:any){

this.http.put("http://localhost:8000/update/student/"+id,student,{responseType:'text' as 'json'})
    .subscribe((data:any) => this.student=data)
    this.router.navigate(['/students']);


}

}
