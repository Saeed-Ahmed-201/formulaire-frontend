import { AfterViewInit, Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../auth/authentication.service';
import { AddFormulaireComponent } from '../../components/add-formulaire/add-formulaire.component';
import { ViewComponent } from '../view/view.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    isForumalaierFilled : boolean | any;

  //  @ViewChild('container', {read: ViewContainerRef})
  //  container : ViewContainerRef | any;

  constructor(private authService: AuthenticationService, private route: ActivatedRoute,private router:Router, private componentFactoryResolver: ComponentFactoryResolver) {
   }

  // ngAfterViewInit(): void {
  //   console.log('Dashboard status',this.authService.formulaireStatus);
  //     if(!this.authService.formulaireStatus){
  //       this.loadComponent(AddFormulaireComponent);
  //     }
  //     else{
  //       this.loadComponent(ViewComponent);
  //     }

  // }

  ngOnInit(): void {
   
  }

  // loadComponent(component:any){
  //   const factory =  this.componentFactoryResolver.resolveComponentFactory(component);
  //   const ref = this.container.createComponent(factory);
  //   ref.changeDetectorRef.detectChanges();
  // }



}
