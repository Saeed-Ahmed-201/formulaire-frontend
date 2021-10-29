import { JwtInterceptorService } from './core/jwt-interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule   , FormsModule} from '@angular/forms';
import  {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgxPrintModule } from 'ngx-print';
import { ToastrModule } from 'ngx-toastr';
import { AuthGuard } from './core/auth.guard';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AddFormulaireComponent } from './components/add-formulaire/add-formulaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddFormulaireComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPrintModule,
    HttpClientModule,
    ToastrModule.forRoot({timeOut: 1000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true})
  ],
  providers: [
    AuthGuard,
                   {provide: HTTP_INTERCEPTORS, useClass:JwtInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }





