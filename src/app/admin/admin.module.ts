import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { UpdateFormComponent } from '../components/update-form/update-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';

@NgModule({
  declarations: [
    DashboardComponent,
    UsersListComponent,
    ViewUserComponent,
    UpdateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPrintModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
