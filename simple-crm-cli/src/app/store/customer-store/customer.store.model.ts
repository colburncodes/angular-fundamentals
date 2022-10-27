import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Customer } from 'src/app/customer/customer.model';

export interface CustomerSearchCriteria {
  term: string;
}

export type SearchStatus = '' | 'searching...' | 'complete';

export interface CustomerState extends EntityState<Customer> {
  searchStatus: SearchStatus;
  criteria: CustomerSearchCriteria;
  customers: Customer[];
}

export const customerStateAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>({
    selectId: (item: Customer) => item.customerId,
  });

export const initialCustomerState: CustomerState =
  customerStateAdapter.getInitialState({
    searchStatus: '',
    criteria: { term: '' },
    customers: [],
  });

export const {
  selectAll: selectAllCustomers,
  selectEntities: selectCustomerEntities,
  selectIds: selectCustomerIds,
  selectTotal: selectCustomerTotal,
} = customerStateAdapter.getSelectors();
