import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowregisterationComponent } from './showregisteration.component';

describe('ShowregisterationComponent', () => {
  let component: ShowregisterationComponent;
  let fixture: ComponentFixture<ShowregisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowregisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
