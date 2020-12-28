ng gimport { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(  private router: Router ){}

canActivate(activatedroute: ActivatedRouteSnapshot, routerstate: RouterStateSnapshot) {


  if(localStorage.getItem('userconnect')=== null){
    this.router.navigate(['']);
    return false;
  }
  return true ;
}



}
