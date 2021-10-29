import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './auth/authentication.service';
import { SharedService } from './services/shared.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'pfa';
  user: any;
  isUserLogin = false;
  constructor(private router: Router, private authService: AuthenticationService, private sharedService: SharedService){       
  }

  ngOnInit(){
     let token = localStorage.getItem('token');
     if(token){
       if(this.authService.currentUserValue.roles[0] == 'USER'){
         this.router.navigate(['user']);
        }
        else{
          this.router.navigate(['admin']);
        }
        this.isUserLogin = true;
      }
  }

  logout(){
     this.authService.logout();
     this.isUserLogin = false;
     this.sharedService.isUserLoggedIn.next(false);
  }


}
