import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionDeleteComponent } from './account-transaction-delete.component';

describe('AccountTransactionDeleteComponent', () => {
  let component: AccountTransactionDeleteComponent;
  let fixture: ComponentFixture<AccountTransactionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransactionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
