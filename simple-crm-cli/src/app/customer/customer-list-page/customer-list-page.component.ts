import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Customer } from '../customer.model';
import { MatDialog } from '@angular/material/dialog';
import { CustomerCreateDialogComponent } from '../customer-create-dialog/customer-create-dialog.component';
import { Router } from '@angular/router';
import {
  BehaviorSubject,
  combineLatest,
  debounceTime,
  Observable,
  startWith,
} from 'rxjs';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { customerSearchCriteria } from 'src/app/store/customer-store/customer.store.model';

import {
  customerSearchAction,
  CustomerState,
} from 'src/app/store/customer-store/customer.store';
import { selectCustomers } from 'src/app/store/customer-store/customer.store.selector';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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

  constructor(public dialog: MatDialog, private store: Store<CustomerState>) {
    this.customers$ = this.store.select(selectCustomers);
    combineLatest([
      this.filterInputStr.valueChanges.pipe(startWith('')),
      this.reload$,
    ])
      .pipe(debounceTime(200))
      .subscribe(([input]) => {
        return this.store.dispatch(
          customerSearchAction({ criteria: { term: input } })
        );
      });
  }

  ngOnInit(): void {
    this.search();
  }

  search() {
    const criteria: customerSearchCriteria = { term: '' };
    this.store.dispatch(customerSearchAction({ criteria }));
  }

  // viewDetail(customer: Customer): void {
  //   this.router.navigate(['/customers/', customer.customerId]);
  // }

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
