import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsgtostudentComponent } from './msgtostudent.component';

describe('MsgtostudentComponent', () => {
  let component: MsgtostudentComponent;
  let fixture: ComponentFixture<MsgtostudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsgtostudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsgtostudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
