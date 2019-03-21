import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentStatusDeleteComponent } from './cash-payment-status-delete.component';

describe('CashPaymentStatusDeleteComponent', () => {
  let component: CashPaymentStatusDeleteComponent;
  let fixture: ComponentFixture<CashPaymentStatusDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentStatusDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentStatusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
