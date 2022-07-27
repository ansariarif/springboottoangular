import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmsgtostudentComponent } from './addmsgtostudent.component';

describe('AddmsgtostudentComponent', () => {
  let component: AddmsgtostudentComponent;
  let fixture: ComponentFixture<AddmsgtostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmsgtostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmsgtostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
