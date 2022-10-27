import { Update } from '@ngrx/entity';
import { Action } from '@ngrx/store';
import { Customer } from 'src/app/customer/customer.model';

export enum CustomerActionTypes {
  LOAD_CUSTOMERS = '[Customer] Load Customers',
  ADD_CUSTOMER = '[Customer] Add Customer',
  SEARCH_CUSTOMER = '[Customer] Search Customer',
  UPDATE_CUSTOMERS = '[Customer] Update Customers',
}

export class LoadCustomers implements Action {
  readonly type = CustomerActionTypes.LOAD_CUSTOMERS;

  constructor(public payload: { customers: Customer[] }) {}
}

export class AddCustomer implements Action {
  readonly type = CustomerActionTypes.ADD_CUSTOMER;

  constructor(public payload: { customer: Customer[] }) {}
}

export class SearchCustomer implements Action {
  readonly type = CustomerActionTypes.SEARCH_CUSTOMER;

  constructor(public payload: { customer: Customer[] }) {}
}

export class UpdateCustomers implements Action {
  readonly type = CustomerActionTypes.UPDATE_CUSTOMERS;

  constructor(public payload: { customers: Update<Customer> }) {}
}

export type CustomerActionsUnion =
  | LoadCustomers
  | AddCustomer
  | SearchCustomer
  | UpdateCustomers;
