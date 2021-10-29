import { Role } from './model/role';
import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';
import { AuthGuard } from './core/auth.guard';
import { RoleguardGuard } from './core/roleguard.guard';

const routes: Routes=[
  {
         path:'authentication',
         loadChildren: () =>import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
             path : 'admin' ,
             loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule),
             canLoad: [AuthGuard, RoleguardGuard],
  },
  {
            path: 'user',
            loadChildren:() => import('./user/user.module').then(m => m.UserModule),
            canLoad: [AuthGuard],

  },
  {
              path:'',
              pathMatch: 'full',
              redirectTo:'authentication'
  }

];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ] , exports:[RouterModule], providers:[]
})
export class AppRoutingModule { }
