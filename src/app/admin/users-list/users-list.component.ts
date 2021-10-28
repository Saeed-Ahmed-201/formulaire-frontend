import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { HttpServiceService } from 'src/app/services/http-service.service';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users : any[] | any;
  updateItem: any;
  recordsNotAvailable = false;

  singleItemView:any;

  constructor(private http : HttpServiceService, private authService: AuthenticationService, private router: Router, private toastr: ToastrService) {
    let loginUserId = authService.currentUserValue.id;
    this.http.retrieveAllUsers(loginUserId).subscribe(data => {
      console.log(data);
      if(data.status == 200){
        this.users = data.result;
      }
      else{
        this.users = data.result;
        this.recordsNotAvailable = true;
      }
    }
    );
  }

  ngOnInit(): void {
  }

 
  addFormulaire(id:number){
     this.router.navigate(['admin/add-record', id]);
  }

  viewFormulaire(id:number){
    this.router.navigate(['admin/view-record', id]);
  }

   deleteUser(userId : number){ 
    this.toastr.success("SUCCESSFULLY DELETED");
     this.http.deleteUser(userId).subscribe((data : any) =>{
        if(data.status == 200){
           location.reload();
        }
        else{
          this.recordsNotAvailable = true;
          this.users = data.result;
        }
     });
   }
 

}
