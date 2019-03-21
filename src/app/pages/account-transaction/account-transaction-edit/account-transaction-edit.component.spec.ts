import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountTransactionEditComponent } from './account-transaction-edit.component';

describe('AccountTransactionEditComponent', () => {
  let component: AccountTransactionEditComponent;
  let fixture: ComponentFixture<AccountTransactionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTransactionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTransactionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
