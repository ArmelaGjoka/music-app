import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from 'projects/authentication/src/public-api';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendInterceptor } from './mock-backend/mock-backend';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component'
import { MatButtonModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    MatButtonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
