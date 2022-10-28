import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-list-table',
  templateUrl: './customer-list-table.component.html',
  styleUrls: ['./customer-list-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerListTableComponent implements OnInit {
  @Input() customers: Customer[] = [];
  @Output() openCustomer = new EventEmitter<Customer>();

  displayColumns = [
    'type',
    'name',
    'phoneNumber',
    'emailAddress',
    'statusCode',
    'lastContactDate',
    'actions',
  ];
  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewDetail(customer: Customer) {
    // this.router.navigate(['/customers/', customer.customerId]);
    this.openCustomer.emit(customer);
  }
}
