import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { empty, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("token") != null && localStorage.getItem("token") != '' && localStorage.getItem("token") != undefined){
      //window.location.href="/subjects"
      return true;
    }
    else{
      window.location.href="/login"
      return false;
    }  
   
  }
  
}
