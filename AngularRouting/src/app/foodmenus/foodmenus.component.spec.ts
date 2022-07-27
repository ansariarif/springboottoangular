import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodmenusComponent } from './foodmenus.component';

describe('FoodmenusComponent', () => {
  let component: FoodmenusComponent;
  let fixture: ComponentFixture<FoodmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodmenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
