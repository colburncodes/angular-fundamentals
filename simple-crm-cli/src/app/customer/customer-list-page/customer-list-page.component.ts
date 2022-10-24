import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  Observable,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit {
  customers$: Observable<Customer[]>;
  filterInputStr = new FormControl('');
  displayColumns = [
    'type',
    'name',
    'phoneNumber',
    'emailAddress',
    'statusCode',
    'lastContactDate',
    'actions',
  ];
  reload$ = new BehaviorSubject<number>(0);

  constructor(
    private custServ: CustomerService,
    public dialog: MatDialog,
    private router: Router
  ) {
    this.customers$ = combineLatest([
      this.filterInputStr.valueChanges.pipe(startWith('')),
      this.reload$,
    ]).pipe(
      debounceTime(200),
      switchMap(([input]) => this.custServ.search(input)),
      shareReplay()
    );
  }

  ngOnInit(): void {}

  search() {
    this.reload$.next(this.reload$.value + 1);
  }

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
