import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { Customer } from 'src/app/customer/customer.model';
import { CustomerSearchCriteria, SearchStatus } from './customer.store.model';

export const customerSearchAction = createAction(
  '[CUSTOMERS] Search Start',
  props<{ criteria: CustomerSearchCriteria }>()
);

export const customersSearchCompleteAction = createAction(
  '[CUSTOMERS] Search Complete',
  props<{ result: Customer[] }>()
);

export interface CustomerState extends EntityState<Customer> {
  searchStatus: SearchStatus;
  criteria: CustomerSearchCriteria;
}

export const customerStateAdapter: EntityAdapter<Customer> =
  createEntityAdapter<Customer>({
    selectId: (item: Customer) => item.customerId,
  });

export const initialCustomerState: CustomerState =
  customerStateAdapter.getInitialState({
    searchStatus: '',
    criteria: { term: '' },
  });

const rawCustomerReducer = createReducer(
  initialCustomerState,
  on(customerSearchAction, (state, action) => ({
    ...state,
    criteria: action.criteria,
    term: 'searching',
  })),
  on(customersSearchCompleteAction, (state, action) => {
    return customerStateAdapter.setAll(action.result, {
      ...state,
      searchStatus: 'complete',
    });
  })
);

/** Provide reducer in AOT-compilation happy way */
export function customerReducer(state: CustomerState, action: Action) {
  return rawCustomerReducer(state, action);
}
