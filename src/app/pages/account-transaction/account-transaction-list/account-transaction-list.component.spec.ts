import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionListComponent } from './account-transaction-list.component';

describe('AccountTransactionListComponent', () => {
  let component: AccountTransactionListComponent;
  let fixture: ComponentFixture<AccountTransactionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransactionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
