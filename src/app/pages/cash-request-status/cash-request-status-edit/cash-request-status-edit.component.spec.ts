import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestStatusEditComponent } from './cash-request-status-edit.component';

describe('CashRequestStatusEditComponent', () => {
  let component: CashRequestStatusEditComponent;
  let fixture: ComponentFixture<CashRequestStatusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestStatusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
