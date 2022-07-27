import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterationssComponent } from './registerationss.component';

describe('RegisterationssComponent', () => {
  let component: RegisterationssComponent;
  let fixture: ComponentFixture<RegisterationssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterationssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
