import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddqueryforstudentComponent } from './addqueryforstudent.component';

describe('AddqueryforstudentComponent', () => {
  let component: AddqueryforstudentComponent;
  let fixture: ComponentFixture<AddqueryforstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddqueryforstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddqueryforstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
