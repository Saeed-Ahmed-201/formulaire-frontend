import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
      {prefix: "./assets/locale/", suffix: ".json"},
      // {prefix: "./assets/translate/shared/", suffix: ".json"},
  ]);
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  exports:[
    HttpClientModule,
    TranslateModule
  ]
})
export class LocaleModuleModule { }
