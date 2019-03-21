import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentStatusEditComponent } from './cash-payment-status-edit.component';

describe('CashPaymentStatusEditComponent', () => {
  let component: CashPaymentStatusEditComponent;
  let fixture: ComponentFixture<CashPaymentStatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentStatusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
