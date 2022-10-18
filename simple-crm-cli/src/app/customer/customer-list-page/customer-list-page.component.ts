import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit {
  customers: Customer[] = [];
  dataSource!: MatTableDataSource<Customer>; // The ! tells Angular you know it may be used before it is set.  Try it without to see the error
  displayColumns = ['name', 'phoneNumber', 'emailAddress', 'statusCode'];

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
    this.dataSource = new MatTableDataSource(this.customers);
  }

  ngOnInit(): void {}
}
