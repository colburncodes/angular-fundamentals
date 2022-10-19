import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit {
  customers: Customer[] = [];
  dataSource!: MatTableDataSource<Customer>; // The ! tells Angular you know it may be used before it is set.  Try it without to see the error
  displayColumns = ['name', 'phoneNumber', 'emailAddress', 'statusCode'];

  constructor(private custServ: CustomerService) {
    this.custServ.search('').subscribe({
      next: (list) => {
        this.customers = list;
      },
    });
    this.dataSource = new MatTableDataSource(this.customers);
  }

  ngOnInit(): void {}
}
