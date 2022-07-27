import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveornotComponent } from './activeornot.component';

describe('ActiveornotComponent', () => {
  let component: ActiveornotComponent;
  let fixture: ComponentFixture<ActiveornotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveornotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveornotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
