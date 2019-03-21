import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestDeleteComponent } from './cash-request-delete.component';

describe('CashRequestDeleteComponent', () => {
  let component: CashRequestDeleteComponent;
  let fixture: ComponentFixture<CashRequestDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
