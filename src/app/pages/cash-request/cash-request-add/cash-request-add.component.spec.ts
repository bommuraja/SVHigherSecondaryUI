import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashRequestAddComponent } from './cash-request-add.component';

describe('CashRequestAddComponent', () => {
  let component: CashRequestAddComponent;
  let fixture: ComponentFixture<CashRequestAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashRequestAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashRequestAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
