import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPercentageListComponent } from './interest-percentage-list.component';

describe('InterestPercentageListComponent', () => {
  let component: InterestPercentageListComponent;
  let fixture: ComponentFixture<InterestPercentageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPercentageListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPercentageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
