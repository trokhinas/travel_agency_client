import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourMenuComponent } from './tour-menu.component';

describe('TourMenuComponent', () => {
  let component: TourMenuComponent;
  let fixture: ComponentFixture<TourMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
