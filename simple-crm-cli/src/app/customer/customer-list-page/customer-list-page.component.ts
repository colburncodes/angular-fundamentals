import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit {
  customers: Customer[] = [];
  dataSource!: MatTableDataSource<Customer>; // The ! tells Angular you know it may be used before it is set.  Try it without to see the error
  displayColumns = [
    'name',
    'phoneNumber',
    'emailAddress',
    'statusCode',
    'lastContactDate',
    'actions',
  ];

  constructor(
    private custServ: CustomerService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.custServ.search('').subscribe({
      next: (list) => {
        this.customers = list;
      },
    });
    this.dataSource = new MatTableDataSource(this.customers);
  }

  ngOnInit(): void {}

  viewDetail(customer: Customer): void {
    this.router.navigate(['/customer/', customer.customerId]);
  }

  addCustomer = () => {
    const dialogRef = this.dialog.open(CustomerCreateDialogComponent, {
      width: '250px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  };
}
