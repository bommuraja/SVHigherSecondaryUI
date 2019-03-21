import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentStatusViewComponent } from './cash-payment-status-view.component';

describe('CashPaymentStatusViewComponent', () => {
  let component: CashPaymentStatusViewComponent;
  let fixture: ComponentFixture<CashPaymentStatusViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentStatusViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
