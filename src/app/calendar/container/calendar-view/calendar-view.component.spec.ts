import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatListModule, MatSelectModule } from '@angular/material';
import { SharedModule } from 'shared';
import { DayViewComponent } from '../../components/day-view/day-view.component';
import { SongsDialogComponent } from '../../components/songs-dialog/songs-dialog.component';

import { CalendarViewComponent } from './calendar-view.component';

describe('CalendarViewComponent', () => {
  let component: CalendarViewComponent;
  let fixture: ComponentFixture<CalendarViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [         
        CommonModule,
        MatButtonModule,
        MatSelectModule,
        FormsModule,
        MatIconModule,
        MatDialogModule,
        DragDropModule,
        SharedModule,
        MatListModule ],
        declarations: [
          CalendarViewComponent,
          DayViewComponent,
          SongsDialogComponent
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
