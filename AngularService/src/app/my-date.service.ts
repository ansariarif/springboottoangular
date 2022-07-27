import { Injectable } from '@angular/core';
/*providing a metadata about how  service to use in
  component when it is injected*/ 
@Injectable({
  providedIn: 'root'
})
export class MyDateService {

  constructor() { }

  getDate():Date{
    return new Date();
  }
}
