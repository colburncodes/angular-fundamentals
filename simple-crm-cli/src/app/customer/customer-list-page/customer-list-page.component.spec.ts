import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerMockService } from '../customer-mock.service';

import { CustomerListPageComponent } from './customer-list-page.component';

fdescribe('CustomerListPageComponent', () => {
  let component: CustomerListPageComponent;
  let fixture: ComponentFixture<CustomerListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CustomerListPageComponent],
      providers: [CustomerMockService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
