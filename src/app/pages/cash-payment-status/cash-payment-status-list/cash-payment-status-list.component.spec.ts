import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPaymentStatusListComponent } from './cash-payment-status-list.component';

describe('CashPaymentStatusListComponent', () => {
  let component: CashPaymentStatusListComponent;
  let fixture: ComponentFixture<CashPaymentStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPaymentStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPaymentStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
