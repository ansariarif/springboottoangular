import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddstudformComponent } from './addstudform.component';

describe('AddstudformComponent', () => {
  let component: AddstudformComponent;
  let fixture: ComponentFixture<AddstudformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddstudformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
