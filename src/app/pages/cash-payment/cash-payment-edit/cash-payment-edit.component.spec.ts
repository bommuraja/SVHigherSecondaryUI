import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentEditComponent } from './cash-payment-edit.component';

describe('CashPaymentEditComponent', () => {
  let component: CashPaymentEditComponent;
  let fixture: ComponentFixture<CashPaymentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
