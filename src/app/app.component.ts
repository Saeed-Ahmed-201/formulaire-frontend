import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './auth/authentication.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'pfa';
  user: any;
  isUserLoggedIn = false;
  currentLocaleLanguage : any;
  browserLanguage:any;

  constructor(private authService: AuthenticationService){
       
  }

  ngOnInit(){
     let currentUser = this.authService.currentUserValue;
     this.user = currentUser.userEmail;
     if(currentUser != null){
       this.isUserLoggedIn = true;
     }
     
  }

  logout(){
     this.authService.logout();
  }


}
