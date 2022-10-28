import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CustomersQuery extends Query<CustomerState> {
  constructor(protected override store: CustomersStore) {
    super(store);
  }
}
import { ID, Query } from '@datorama/akita';
import { CustomersStore } from './customers.store';
import { CustomerState } from '../store/customer-store/customer.store';
