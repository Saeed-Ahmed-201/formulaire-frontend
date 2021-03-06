import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/shared.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   message = null;
   loginForm : FormGroup | any;

  constructor(private activateRoute:ActivatedRoute ,private auth:AuthenticationService, private router: Router,private sharedService:SharedService,private toastr: ToastrService) {
    // if (this.auth.currentUserValue) {
    //   if(this.auth.currentUserValue.roles[0] == "USER"){
    //     this.router.navigate(['user']);
    //   }
    //   else{
    //     this.router.navigate(['admin']);
    //   }
    // }
    this.message = this.activateRoute.snapshot.params.state;
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('', [Validators.required]),
});
  }

  get form(){
       return this.loginForm.controls;
  }

  login(){
      const email = this.form.email.value;
      const password = this.form.password.value;

      this.auth.login(email, password).subscribe(response => {
            if(response.status === 404){
              this.toastr.warning(response.result);
            }
            else{
              this.sharedService.isUserLoggedIn.next(true);
              if(response.result.roles[0] == 'ADMIN'){
                this.router.navigate(['admin']);
              }
              else if (response.result.roles[0] =='USER'){
                if(!response.result.filledFormulaire){
                  this.router.navigate(['user/dashboard/add-record']);
                }
                else{
                  this.router.navigate(['user/dashboard/view-my-record']);
                }
              }
            }
          });
        }

}
