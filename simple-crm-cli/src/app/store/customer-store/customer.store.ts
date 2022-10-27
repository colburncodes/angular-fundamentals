import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { Customer } from 'src/app/customer/customer.model';
import {
  CustomerSearchCriteria,
  CustomerState,
  customerStateAdapter,
  initialCustomerState,
} from './customer.store.model';

export const customerSearchAction = createAction(
  '[CUSTOMERS] Search Start',
  props<{ criteria: CustomerSearchCriteria }>()
);

export const customersSearchCompleteAction = createAction(
  '[CUSTOMERS] Search Complete',
  props<{ result: Customer[] }>()
);

export const customerFeatureKey = 'customer';

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
