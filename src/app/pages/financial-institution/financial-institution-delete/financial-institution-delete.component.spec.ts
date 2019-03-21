import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutionDeleteComponent } from './financial-institution-delete.component';

describe('FinancialInstitutionDeleteComponent', () => {
  let component: FinancialInstitutionDeleteComponent;
  let fixture: ComponentFixture<FinancialInstitutionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInstitutionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
