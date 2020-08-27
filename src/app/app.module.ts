import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { FormatInterceptor } from './format.interceptor';
import { RetryInterceptor } from './retry.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { AppComponent } from './app.component';
import { FormatComponent } from './format/format.component';
import { HeaderComponent } from './header/header.component';
import { RetryComponent } from './retry/retry.component';

const routes: Routes = [
 { path: '', component: FormatComponent },
 { path: 'header', component: HeaderComponent },
 { path: 'retry', component: RetryComponent }
];

@NgModule({
  imports:      [ BrowserModule, HttpClientModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, FormatComponent, HeaderComponent, RetryComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: FormatInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: RetryInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
  ]
})
export class AppModule { }
