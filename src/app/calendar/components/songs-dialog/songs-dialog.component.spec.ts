import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MAT_DIALOG_DATA } from '@angular/material';
import { SharedModule } from 'shared';

import { SongsDialogComponent } from './songs-dialog.component';

describe('SongsDialogComponent', () => {
  let component: SongsDialogComponent;
  let fixture: ComponentFixture<SongsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsDialogComponent ],
      imports: [SharedModule, MatIconModule],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: {
            songs: [],
            day: new Date()
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
