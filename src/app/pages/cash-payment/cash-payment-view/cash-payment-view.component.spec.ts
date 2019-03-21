import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentViewComponent } from './cash-payment-view.component';

describe('CashPaymentViewComponent', () => {
  let component: CashPaymentViewComponent;
  let fixture: ComponentFixture<CashPaymentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
