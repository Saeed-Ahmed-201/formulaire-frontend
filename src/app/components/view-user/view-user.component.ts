import { Component, Input, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';
import { AuthenticationService } from '../../auth/authentication.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  
  singleItemView : any;

  constructor(private route: Router, private httpService : HttpServiceService, private authService: AuthenticationService, private router: ActivatedRoute) { }

  ngOnInit(): void {
     let userId = this.router.snapshot.paramMap.get('id');
     this.retrieveUser(userId);
  }

  retrieveUser(userId: any){
      this.httpService.retrieveSingleFormula(userId).subscribe(data => {
        if(data.status == 200){
          console.log(data)
          this.singleItemView = data.result;
        }
      })
  }

  updateRecord(userId:any){
      this.route.navigate(['admin/update-record', userId]);
  }

  deleteRecord(id:number){
       this.httpService.deleteFormulaireRecord(id).subscribe((data : any) =>{
         if(data.status == 200){
           this.route.navigate(['/admin']);
         }
       });
  }

  goBack(){
     this.route.navigate(['admin'])
  }

}
