import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private router:Router, private authService: AuthenticationService){
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
       if(this.authService.isUserLogin){
         return true;
       }
        // not logged in so redirect to login page with the return url
       this.router.navigate(['authentication/login']);
       return false;

  }

}
