import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeetostudentComponent } from './feetostudent.component';

describe('FeetostudentComponent', () => {
  let component: FeetostudentComponent;
  let fixture: ComponentFixture<FeetostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeetostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeetostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
