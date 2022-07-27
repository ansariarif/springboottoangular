import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formdriven';

  sportList:sport[] = [ new sport("1", "Football"), new sport('2', 'Cricket'),new sport('3', 'Tenis')
  ];


  onSubmit(sportForm:any) {
    console.log(sportForm.value);
  }
}

export class sport {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
