import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestViewComponent } from './cash-request-view.component';

describe('CashRequestViewComponent', () => {
  let component: CashRequestViewComponent;
  let fixture: ComponentFixture<CashRequestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
