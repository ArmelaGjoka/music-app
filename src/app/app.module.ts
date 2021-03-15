import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from 'projects/core/src/lib/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempCompComponent } from './temp-comp/temp-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    TempCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
