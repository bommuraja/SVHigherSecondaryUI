import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentDeleteComponent } from './cash-payment-delete.component';

describe('CashPaymentDeleteComponent', () => {
  let component: CashPaymentDeleteComponent;
  let fixture: ComponentFixture<CashPaymentDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
