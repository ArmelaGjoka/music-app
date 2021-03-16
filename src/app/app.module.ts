import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarViewComponent } from './calendar/container/calendar-view/calendar-view.component';
import { AuthenticationModule } from 'projects/authentication/src/public-api';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockBackendInterceptor } from './mock-backend/mock-backend';
import { DayViewComponent } from './calendar/components/day-view/day-view.component';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { SongsDialogComponent } from './calendar/components/songs-dialog/songs-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    CalendarViewComponent,
    DayViewComponent,
    SongsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthenticationModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    DragDropModule,
    MatListModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MockBackendInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [SongsDialogComponent]
})
export class AppModule { }
