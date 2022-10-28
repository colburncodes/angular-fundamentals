import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerListTableComponent } from './customer-list-table.component';

describe('CustomerListTableComponent', () => {
  let component: CustomerListTableComponent;
  let fixture: ComponentFixture<CustomerListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerListTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
