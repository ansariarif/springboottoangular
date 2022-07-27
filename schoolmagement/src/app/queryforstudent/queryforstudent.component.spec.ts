import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryforstudentComponent } from './queryforstudent.component';

describe('QueryforstudentComponent', () => {
  let component: QueryforstudentComponent;
  let fixture: ComponentFixture<QueryforstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryforstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryforstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
