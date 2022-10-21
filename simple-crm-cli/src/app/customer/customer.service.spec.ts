import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { CustomerService } from './customer.service';

fdescribe('CustomerService', () => {
  let injector: TestBed;
  let service: CustomerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerService],
    });
    injector = getTestBed();
    service = TestBed.inject(CustomerService);
    httpMock = injector.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // ensures there are no outstanding requests between tests.
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get should be created', () => {
    expect(service).toBeTruthy();
  });

  it('insert should be created', () => {
    expect(service).toBeTruthy();
  });

  it('update should be created', () => {
    expect(service).toBeTruthy();
  });
});
