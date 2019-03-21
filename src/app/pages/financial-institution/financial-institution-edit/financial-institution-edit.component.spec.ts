import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutionEditComponent } from './financial-institution-edit.component';

describe('FinancialInstitutionEditComponent', () => {
  let component: FinancialInstitutionEditComponent;
  let fixture: ComponentFixture<FinancialInstitutionEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInstitutionEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
