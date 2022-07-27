import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatequerytostudentComponent } from './updatequerytostudent.component';

describe('UpdatequerytostudentComponent', () => {
  let component: UpdatequerytostudentComponent;
  let fixture: ComponentFixture<UpdatequerytostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatequerytostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatequerytostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
