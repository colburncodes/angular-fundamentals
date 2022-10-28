import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { Customer } from 'src/app/customer/customer.model';
import { customerSearchCriteria, SearchStatus } from './customer.store.model';

export const customerSearchAction = createAction(
  '[CUSTOMERS] Search Start',
  props<{ criteria: customerSearchCriteria }>()
);

export const customersSearchCompleteAction = createAction(
  '[CUSTOMERS] Search Complete',
  props<{ result: Customer[] }>()
);

export interface CustomerState extends EntityState<Customer> {
  searchStatus: SearchStatus;
  criteria: customerSearchCriteria;
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
  on(customersSearchCompleteAction, (state, action) => ({
    ...customerStateAdapter.setAll(action.result, state),
    searchStatus: 'complete',
  }))
);

/** Provide reducer in AOT-compilation happy way */
export function customerReducer(state: CustomerState, action: Action) {
  return rawCustomerReducer(state, action);
}
