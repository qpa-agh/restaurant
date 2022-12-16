import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewDishFormComponent } from './add-new-dish-form.component';

describe('AddNewDishFormComponent', () => {
  let component: AddNewDishFormComponent;
  let fixture: ComponentFixture<AddNewDishFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewDishFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewDishFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
