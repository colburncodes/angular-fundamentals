import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerMockService extends CustomerService {
  customers: Customer[] = [];
  lastCustomerId: number;

  constructor(httpClient: HttpClient) {
    super(httpClient);
    console.warn('You are using the mock service.');
    const localCustomers = localStorage.getItem('customers');
    if (localCustomers) {
      this.customers = JSON.parse(localCustomers);
    } else {
      this.customers = [
        {
          customerId: 1,
          firstName: 'Colburn',
          lastName: 'Sanders',
          phoneNumber: '123456789',
          emailAddress: 'colburn@me.com',
          type: 'personal',
          preferredContactMethod: 'email',
          statusCode: '2',
          lastContactDate: new Date().toISOString(),
        },
        {
          customerId: 2,
          firstName: 'Colburn',
          lastName: 'Sanders',
          phoneNumber: '123456789',
          emailAddress: 'colburn@me.com',
          type: 'personal',
          preferredContactMethod: 'email',
          statusCode: '2',
          lastContactDate: new Date().toISOString(),
        },
        {
          customerId: 3,
          firstName: 'Colburn',
          lastName: 'Sanders',
          phoneNumber: '123456789',
          emailAddress: 'colburn@me.com',
          type: 'business',
          preferredContactMethod: 'email',
          statusCode: '2',
          lastContactDate: new Date().toISOString(),
        },
        {
          customerId: 4,
          firstName: 'Colburn',
          lastName: 'Sanders',
          phoneNumber: '123456789',
          emailAddress: 'colburn@me.com',
          type: 'none',
          preferredContactMethod: 'email',
          statusCode: '2',
          lastContactDate: new Date().toISOString(),
        },
      ];
    }
    this.lastCustomerId = Math.max(...this.customers.map((m) => m.customerId));
  }

  override get(customerId: number): Observable<Customer> {
    const item = this.customers.find(
      (x) => x.customerId === customerId
    ) as Customer;
    return of(item);
  }

  override search(term: string): Observable<Customer[]> {
    // localStorage.setItem('customers', JSON.stringify(this.customers));

    // const items = this.customers.filter((customer) => {
    //   return customer.firstName
    //     .toLocaleLowerCase()
    //     .includes(term.toLocaleLowerCase());
    // });

    const items = this.customers;

    return of(items);
  }

  override insert(customer: Customer): Observable<Customer> {
    localStorage.setItem('customers', JSON.stringify(this.customers));
    this.customers.push(customer);
    return of(customer);
  }

  override update(customer: Customer): Observable<Customer> {
    const match = this.customers.find(
      (f) => f.customerId === customer.customerId
    );

    if (match) {
      this.customers = this.customers.map((x) =>
        x.customerId === customer.customerId ? customer : x
      );
    } else {
      this.customers = [...this.customers, customer];
    }

    localStorage.setItem('customers', JSON.stringify(this.customers));
    return of(customer);
  }
}
