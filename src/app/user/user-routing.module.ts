import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormulaireComponent } from '../components/add-formulaire/add-formulaire.component';
import { CanAddGuard } from '../core/can-add.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
              {
                path: 'dashboard',
                component: DashboardComponent,
                children: [
                            {path: 'view-my-record', component:ViewComponent},
                            {
                              path: 'add-record', 
                              component:AddFormulaireComponent,
                              canActivate: [CanAddGuard]
                            },
                            {
                              path:'',
                              redirectTo: 'add-record',
                              pathMatch: 'full'
                            }
                          ]
              },
              {
                path: 'update-record',
                component :UpdateRecordComponent,
                data: {id:122}
              },
              {
                path:'',
                redirectTo: 'dashboard',
                pathMatch: 'full'
              }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
