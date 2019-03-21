import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestStatusListComponent } from './cash-request-status-list.component';

describe('CashRequestStatusListComponent', () => {
  let component: CashRequestStatusListComponent;
  let fixture: ComponentFixture<CashRequestStatusListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestStatusListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestStatusListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
