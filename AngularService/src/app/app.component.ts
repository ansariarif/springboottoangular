import { Component } from '@angular/core';
import { MyDateService } from './my-date.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularService';
   
  today:Date;
  constructor(private mydate:MyDateService){
    this.today=mydate.getDate();
  }
}
