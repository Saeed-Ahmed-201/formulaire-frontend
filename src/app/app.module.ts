import { JwtInterceptorService } from './core/jwt-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule   , FormsModule} from '@angular/forms';
import  {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormulaireListComponent } from './formulaire-list/formulaire-list.component';
import { NgxPrintModule } from 'ngx-print';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AddFormulaireComponent } from './components/add-formulaire/add-formulaire.component';
import { LocaleModuleModule } from './core/locale-module.module';
@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    FormulaireListComponent,
    DashboardComponent,
    AddFormulaireComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    HttpClientModule,
    LocaleModuleModule,
    ToastrModule.forRoot({timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true})
  ],
  providers: [
    AuthGuard,
                   {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }





