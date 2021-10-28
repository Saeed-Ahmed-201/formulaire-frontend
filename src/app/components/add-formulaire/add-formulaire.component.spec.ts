import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormulaireComponent } from './add-formulaire.component';

describe('AddFormulaireComponent', () => {
  let component: AddFormulaireComponent;
  let fixture: ComponentFixture<AddFormulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormulaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
