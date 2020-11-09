import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegServiceService } from '../registration-service/reg-service.service';

@Injectable({
  providedIn: 'root'
})
export class CanActiveGuardGuard implements CanActivate {
  constructor(public regservice:RegServiceService, public rout: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   if(!sessionStorage.getItem('session'))
   {
    this.rout.navigate(['']);
    return false;
   }

      return true;
  }
  
}
