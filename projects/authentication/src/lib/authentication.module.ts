import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './components/login/login.component';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';



@NgModule({
  imports: [
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      HttpClientModule
  ],
  declarations: [
      LoginComponent
  ],
  providers: [
      { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ]
})
export class AuthenticationModule { }
