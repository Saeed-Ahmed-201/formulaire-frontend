import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanLoad {
  constructor(private authService: AuthenticationService, private router: Router){}
  canLoad(route: Route, segments: UrlSegment[]): boolean  {
       if(this.authService.hasAdminRole){
         return true;
       }
       return false;
  }


}
