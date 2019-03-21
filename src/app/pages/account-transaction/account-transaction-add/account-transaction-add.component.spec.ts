import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionAddComponent } from './account-transaction-add.component';

describe('AccountTransactionAddComponent', () => {
  let component: AccountTransactionAddComponent;
  let fixture: ComponentFixture<AccountTransactionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransactionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
