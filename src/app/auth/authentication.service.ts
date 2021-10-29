import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from "rxjs/operators";
import { user } from '../model/user.model';
import { SharedService } from '../services/shared.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
      baseUrl = "http://localhost:8888";
      currentUser: BehaviorSubject<any>;
      isUserAdmin: boolean | any = false;
      isFormulareAdded : BehaviorSubject<boolean> | any;

       constructor(private http : HttpClient, private router: Router, private sharedService: SharedService) {
         const storedUser = JSON.parse(localStorage.getItem('userInfo') || '{}');
         const isFormulaireAddedStatus = JSON.parse(localStorage.getItem('userInfo') || '{}');

         this.isFormulareAdded = new BehaviorSubject(isFormulaireAddedStatus.filledFormulaire);
         this.currentUser = new BehaviorSubject(storedUser);
       
        }

      login(email:string, password:string){
          return this.http.post(`${this.baseUrl}/signin`,{email, password}).pipe(map((data:any) => {
                  localStorage.setItem("userInfo", JSON.stringify(data.result));
                  localStorage.setItem("token", JSON.stringify(data.result.token));

                  this.currentUser.next(data.result);
                  this.isFormulareAdded.next(data.result.filledFormulaire);
                  localStorage.setItem('currentUserName', JSON.stringify(data.result.userFullName))
                  localStorage.removeItem('hasFormulaired');
                  localStorage.setItem('hasFormulaired', JSON.stringify(data.result.filledFormulaire));
                  this.sharedService.isUserLoggedIn.next(true);
                  return data;
          }));
      }

      get currentUserValue(){
          return this.currentUser.value;
      }

      get formulaireStatus(){
        return this.isFormulareAdded.value;
      }


      signUp(user :user) : Observable<any>{
              return this.http.post(`${this.baseUrl}/signup/user`, user );
      }

      get hasAdminRole(){
          let userInfo : any = JSON.parse(localStorage.getItem('userInfo') || '{}');
          console.log(userInfo);
          return userInfo.roles.indexOf('ADMIN') !== -1;
      }



      get isUserLogin(){
           return !!localStorage.getItem('token');
      }
      logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('hasFormulaired');
        localStorage.removeItem('currentUserName')
        this.currentUser.next(null);
        this.isFormulareAdded.next(null);
        this.router.navigate(['authentication/login']);
      }

}
