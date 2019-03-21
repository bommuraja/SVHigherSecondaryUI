import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestPercentageEditComponent } from './interest-percentage-edit.component';

describe('InterestPercentageEditComponent', () => {
  let component: InterestPercentageEditComponent;
  let fixture: ComponentFixture<InterestPercentageEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestPercentageEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestPercentageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
