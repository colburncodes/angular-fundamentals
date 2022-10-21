import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { getTestBed, TestBed } from '@angular/core/testing';

import { CustomerMockService } from './customer-mock.service';
import { Customer } from './customer.model';

fdescribe('CustomerMockService', () => {
  let injector: TestBed;
  let customer: Customer;
  let service: CustomerMockService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CustomerMockService],
    });
    injector = getTestBed();
    service = TestBed.inject(CustomerMockService);
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

  it(`insert 'customer' should be created`, () => {
    (done: DoneFn) => {
      service.insert(customer).subscribe((c) => {
        expect(c).toBe(c);
        done();
      });
    };
    expect(service).toBeTruthy();
  });

  it(`update 'emailaddress' for customer`, () => {
    (done: DoneFn) => {
      customer = {
        customerId: 1,
        firstName: 'colburn',
        lastName: 'sanders',
        emailAddress: 'colburn@me.com',
        phoneNumber: '111-111-1111',
        preferredContactMethod: 'email',
        statusCode: '1',
        lastContactDate: new Date().toISOString(),
        type: 'business',
      };

      service
        .update(customer)
        .subscribe((c) => {
          c.emailAddress = 'colburn@aol.com';
          expect(c.emailAddress).toBe(c.emailAddress);
        })
        .unsubscribe();

      done();
    };
    expect(service).toBeTruthy();
  });
});
