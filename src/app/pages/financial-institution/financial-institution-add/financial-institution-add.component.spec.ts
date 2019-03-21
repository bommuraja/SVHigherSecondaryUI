import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutionAddComponent } from './financial-institution-add.component';

describe('FinancialInstitutionAddComponent', () => {
  let component: FinancialInstitutionAddComponent;
  let fixture: ComponentFixture<FinancialInstitutionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInstitutionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
