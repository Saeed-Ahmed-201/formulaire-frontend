import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class CanAddGuard implements CanActivate {

  constructor( private router: Router){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {

    let hasFormulaired = localStorage.getItem('hasFormulaired'); 
    if(hasFormulaired === 'false'){
       return true;
    }
    
    this.router.navigate(['user/dashboard/view-my-record', {message: 'REGISTERED FORM INFORMATION'}]);
    return false;
  }
  
}
