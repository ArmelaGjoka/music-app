import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarViewComponent } from './calendar/container/calendar-view/calendar-view.component';
import { AuthenticationModule } from 'projects/authentication/src/public-api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendInterceptor } from './mock-backend/mock-backend';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
