import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm : FormGroup | any;
  constructor(private router:Router, private fb: FormBuilder, private authService: AuthenticationService, private toastr: ToastrService) { }

  ngOnInit(): void {
      this.signupForm = this.fb.group({
            fullName : new FormControl('', [Validators.required]),
            contact: new FormControl('', [Validators.required]),
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
      });
  }


  signup(){
    this.authService.signUp(this.signupForm.value).subscribe(response => {
         this.toastr.success(response.result);
         if(response.status == 201){
           setTimeout(() => {
             this.router.navigate(['authentication/login',{state: "You have successfully created account. Login please now."}]);
           }, 2000)
         }
       });
  }

}
