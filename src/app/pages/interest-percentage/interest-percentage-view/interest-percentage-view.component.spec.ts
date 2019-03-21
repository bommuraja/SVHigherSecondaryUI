import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPercentageViewComponent } from './interest-percentage-view.component';

describe('InterestPercentageViewComponent', () => {
  let component: InterestPercentageViewComponent;
  let fixture: ComponentFixture<InterestPercentageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPercentageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPercentageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
