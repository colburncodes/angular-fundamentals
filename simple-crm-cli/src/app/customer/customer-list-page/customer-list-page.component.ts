import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit {
  customers: Customer[] = [];

  constructor() {
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
        lastContactDate: '2022',
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
        lastContactDate: '2022',
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
        lastContactDate: '2022',
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
        lastContactDate: '2022',
      },
    ];
  }

  ngOnInit(): void {}
}
