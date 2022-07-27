import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-updatequerytostudent',
  templateUrl: './updatequerytostudent.component.html',
  styleUrls: ['./updatequerytostudent.component.css']
})
export class UpdatequerytostudentComponent implements OnInit {
  urlid:any;
  query:any={id:"", date:"",reason:"",feeback:""}
  constructor(private http:HttpClient,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let str_id = parseInt(params.get('id'));
      this.urlid = str_id;
    })


    this.getqueryById(this.urlid);
  }


  getqueryById(id){
    this.http.get("http://localhost:8000/query/feedback/"+id).subscribe((data:any) => this.query=data);
}

  
updateQuery(query:any,id:any){

  this.http.put("http://localhost:8000/update/query/"+id,query,{responseType:'text' as 'json'})
      .subscribe((data:any) => this.query=data)
      this.router.navigate(['/query']);
  
  
  }

}
