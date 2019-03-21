import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentStatusAddComponent } from './cash-payment-status-add.component';

describe('CashPaymentStatusAddComponent', () => {
  let component: CashPaymentStatusAddComponent;
  let fixture: ComponentFixture<CashPaymentStatusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentStatusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentStatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
