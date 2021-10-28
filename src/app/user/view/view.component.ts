import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, switchAll, switchMap } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/auth/authentication.service';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  message: any;
  
  singleItem: any = {};

  constructor(private sharedService: SharedService, private httpService: HttpServiceService,private authService:AuthenticationService,private router:Router, private route: ActivatedRoute, private translate:TranslateService) { 
    
  }


  ngOnInit(): void {

    if(this.route.snapshot.paramMap.get('message') != null){
      this.message = this.route.snapshot.paramMap.get('message');
    }

    this.retrieveFormulaireInformation();
    
    // this.translate.get(this.language).subscribe(data => console.log(data))

  }

  retrieveFormulaireInformation(){
      let id = this.authService.currentUserValue.id;
      this.httpService.retrieveSingleFormula(id).subscribe((data:any) => {
      this.singleItem = data.result;
      console.log(data);
     });
  }

  updateRecord(userId:any){
    this.sharedService.userId = userId;
    this.router.navigate(['user/update-record']);
}  
}
