import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPercentageDeleteComponent } from './interest-percentage-delete.component';

describe('InterestPercentageDeleteComponent', () => {
  let component: InterestPercentageDeleteComponent;
  let fixture: ComponentFixture<InterestPercentageDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPercentageDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPercentageDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
