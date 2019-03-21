import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialInstitutionViewComponent } from './financial-institution-view.component';

describe('FinancialInstitutionViewComponent', () => {
  let component: FinancialInstitutionViewComponent;
  let fixture: ComponentFixture<FinancialInstitutionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialInstitutionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialInstitutionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
