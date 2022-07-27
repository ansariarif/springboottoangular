import { Component, OnInit } from '@angular/core';

//import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
//import ThreeDRotation from '@mui/icons-material/ThreeDRotation';


@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  
  date1: Date = new Date();

  constructor() { }
 
  ngOnInit(): void {
  }


}
