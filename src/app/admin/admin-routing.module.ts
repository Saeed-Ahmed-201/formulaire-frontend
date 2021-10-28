import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormulaireComponent } from '../components/add-formulaire/add-formulaire.component';
import { UpdateFormComponent } from '../components/update-form/update-form.component';
import { ViewUserComponent } from '../components/view-user/view-user.component';
import { UpdateFormResolver } from '../core/update-form.resolver';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'add-record/:id',
    component:AddFormulaireComponent
  },
  {
    path: 'view-record/:id',
    component:ViewUserComponent
  },
  {
    path: 'update-record/:id',
    component:UpdateFormComponent,
    resolve: { formulaire :UpdateFormResolver}
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
        path: '',
        redirectTo:'dashboard',
        pathMatch: 'full'

}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
