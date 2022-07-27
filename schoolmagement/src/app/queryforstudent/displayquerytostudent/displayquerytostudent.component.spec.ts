import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayquerytostudentComponent } from './displayquerytostudent.component';

describe('DisplayquerytostudentComponent', () => {
  let component: DisplayquerytostudentComponent;
  let fixture: ComponentFixture<DisplayquerytostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayquerytostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayquerytostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
