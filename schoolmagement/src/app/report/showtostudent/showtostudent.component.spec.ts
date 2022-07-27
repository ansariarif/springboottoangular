import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowtostudentComponent } from './showtostudent.component';

describe('ShowtostudentComponent', () => {
  let component: ShowtostudentComponent;
  let fixture: ComponentFixture<ShowtostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowtostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowtostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
