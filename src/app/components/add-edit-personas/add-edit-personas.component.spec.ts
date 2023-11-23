import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditPersonasComponent } from './add-edit-personas.component';

describe('AddEditPersonasComponent', () => {
  let component: AddEditPersonasComponent;
  let fixture: ComponentFixture<AddEditPersonasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditPersonasComponent]
    });
    fixture = TestBed.createComponent(AddEditPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
