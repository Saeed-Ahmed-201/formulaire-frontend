import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../../services/http-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  updateItemValues : any;

  singleItemView : any;

  constructor() {

  }

  ngOnInit(): void {
  }


  openUpdateModal(event:any){
    console.log(event);
     this.updateItemValues = event;
  }

  openViewModal(event:any){
    this.singleItemView = event;
  }

}
