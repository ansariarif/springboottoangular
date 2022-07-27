import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor() { }

 user = {
   userName: 'arif',
   userAge:23

 }

 companyName="neosoft technologies";

 comp = 10;


  ngOnInit(): void {
  }

}
