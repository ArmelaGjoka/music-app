import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'shared';
import { DayViewComponent } from '../../components/day-view/day-view.component';
import { SongsDialogComponent } from '../../components/songs-dialog/songs-dialog.component';
import { CalendarService } from '../../services/calendar.service';
import { SongsService } from '../../services/songs.service';

import { CalendarViewComponent } from './calendar-view.component';

describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [         
        CommonModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        DragDropModule,
        SharedModule,
        MatListModule,
        HttpClientModule
       ],
        declarations: [
          CalendarViewComponent,
          DayViewComponent,
          SongsDialogComponent
        ],
        providers: [
          CalendarService, SongsService
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
