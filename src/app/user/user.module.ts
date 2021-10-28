import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ViewComponent } from './view/view.component';
import { UpdateRecordComponent } from './update-record/update-record.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocaleModuleModule } from '../core/locale-module.module';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ViewComponent,
    UpdateRecordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    LocaleModuleModule,
   HttpClientModule,
  LocaleModuleModule
],
exports:[
  HttpClientModule,
  TranslateModule
]
})
export class UserModule { }
