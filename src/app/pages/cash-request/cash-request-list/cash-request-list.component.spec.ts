import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestListComponent } from './cash-request-list.component';

describe('CashRequestListComponent', () => {
  let component: CashRequestListComponent;
  let fixture: ComponentFixture<CashRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
