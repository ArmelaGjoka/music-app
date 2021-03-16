import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule, MatDialog, MatIconModule } from '@angular/material';

import { DayViewComponent } from './day-view.component';

describe('DayViewComponent', () => {
  let component: DayViewComponent;
  let fixture: ComponentFixture<DayViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DayViewComponent ],
      imports: [
        MatIconModule,
        MatButtonModule
      ],
      providers: [
        {
          provide: MatDialog
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DayViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
