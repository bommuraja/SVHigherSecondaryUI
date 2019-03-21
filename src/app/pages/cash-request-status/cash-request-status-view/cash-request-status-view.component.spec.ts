import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestStatusViewComponent } from './cash-request-status-view.component';

describe('CashRequestStatusViewComponent', () => {
  let component: CashRequestStatusViewComponent;
  let fixture: ComponentFixture<CashRequestStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestStatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
