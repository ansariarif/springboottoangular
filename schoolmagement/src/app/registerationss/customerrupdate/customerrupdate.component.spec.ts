import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerrupdateComponent } from './customerrupdate.component';

describe('CustomerrupdateComponent', () => {
  let component: CustomerrupdateComponent;
  let fixture: ComponentFixture<CustomerrupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerrupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerrupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
