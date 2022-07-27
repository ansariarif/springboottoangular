import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlogintocustomerComponent } from './showlogintocustomer.component';

describe('ShowlogintocustomerComponent', () => {
  let component: ShowlogintocustomerComponent;
  let fixture: ComponentFixture<ShowlogintocustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowlogintocustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowlogintocustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
