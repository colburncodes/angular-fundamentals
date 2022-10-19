import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Customer } from './customer.model';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerMockService extends CustomerService {
  customers: Customer[] = [];

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
  }

  override search(term: string): Observable<Customer[]> {
    var searchTerm = this.customers.filter(function (customer) {
      return customer.firstName
        .toLocaleLowerCase()
        .includes(term.toLocaleLowerCase());
    });

    return of(searchTerm);
  }

  override insert(customer: Customer): Observable<Customer> {
    localStorage.setItem('customers', JSON.stringify(this.customers));
    this.customers.push(customer);
    return of(customer);
  }

  override update(customer: Customer): Observable<Customer> {
    localStorage.setItem('customers', JSON.stringify(this.customers));
    this.customers.map((item) => {
      if (item.customerId == customer.customerId) {
        customer.firstName = item.firstName;
        customer.lastName = item.lastName;
        customer.emailAddress = item.emailAddress;
      }
    });
    return of(customer);
  }
}
