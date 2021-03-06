import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthenticationService } from '../auth/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthenticationService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const allowedUrl = ['/signin', '/signup/user'];
   if((req.url.search(allowedUrl[0]) === -1) && (req.url.search(allowedUrl[1]) === -1)){
      let token = JSON.parse(localStorage.getItem('token') || '{}');
      if(token){
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
    return next.handle(req);
  }
}
