import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestStatusDeleteComponent } from './cash-request-status-delete.component';

describe('CashRequestStatusDeleteComponent', () => {
  let component: CashRequestStatusDeleteComponent;
  let fixture: ComponentFixture<CashRequestStatusDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestStatusDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestStatusDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
