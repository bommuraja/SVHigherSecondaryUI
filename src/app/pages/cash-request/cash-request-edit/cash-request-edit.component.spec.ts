import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestEditComponent } from './cash-request-edit.component';

describe('CashRequestEditComponent', () => {
  let component: CashRequestEditComponent;
  let fixture: ComponentFixture<CashRequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
