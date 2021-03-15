import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCompComponent } from './temp-comp.component';

describe('TempCompComponent', () => {
  let component: TempCompComponent;
  let fixture: ComponentFixture<TempCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
