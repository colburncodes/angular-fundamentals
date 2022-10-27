import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
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
import { CustomerSearchCriteria } from 'src/app/store/customer-store/customer.store.model';
import { selectAllCustomers } from 'src/app/store/customer-store/customer.store.selector';
import {
  customerSearchAction,
  CustomerState,
} from 'src/app/store/customer-store/customer.store';

@Component({
  selector: 'app-customer-list-page',
  templateUrl: './customer-list-page.component.html',
  styleUrls: ['./customer-list-page.component.scss'],
})
export class CustomerListPageComponent implements OnInit {
  @Input() title: string;
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
    public dialog: MatDialog,
    private router: Router,
    private store: Store<CustomerState>,
    private cdr: ChangeDetectorRef
  ) {
    this.title = 'Hi';
    this.customers$ = this.store.select(selectAllCustomers);
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
    //this.search();
  }

  search() {
    const criteria: CustomerSearchCriteria = { term: '' };
    this.store.dispatch(customerSearchAction({ criteria }));
  }

  viewDetail(customer: Customer): void {
    this.router.navigate(['/customers/', customer.customerId]);
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
