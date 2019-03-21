import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestStatusAddComponent } from './cash-request-status-add.component';

describe('CashRequestStatusAddComponent', () => {
  let component: CashRequestStatusAddComponent;
  let fixture: ComponentFixture<CashRequestStatusAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestStatusAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestStatusAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
