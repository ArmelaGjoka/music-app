import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongsDialogComponent } from './songs-dialog.component';

describe('SongsDialogComponent', () => {
  let component: SongsDialogComponent;
  let fixture: ComponentFixture<SongsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongsDialogComponent ]
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
