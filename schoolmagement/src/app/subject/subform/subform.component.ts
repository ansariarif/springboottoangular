import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-subform',
  templateUrl: './subform.component.html',
  styleUrls: ['./subform.component.css']
})
export class SubformComponent implements OnInit {
 

  urlid:any;
  subject:any={id:"", name:""}
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let str_id = parseInt(params.get('id'));
      this.urlid = str_id;
    })

    this.getSubjectById(this.urlid);
  }


  getSubjectById(id){
    this.http.get("http://localhost:8000/subject/"+id).subscribe((data:any) => this.subject=data);
}

updateSubject(subject:any,id:any){

this.http.put("http://localhost:8000/update/subject/"+id,subject,{responseType:'text' as 'json'})
    .subscribe((data:any) => this.subject=data);
    this.router.navigate(['/subjects']);


}

}
