import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState, customerStateAdapter } from './customer.store';

export const {
  selectAll: selectAllCustomers,
  selectEntities: selectCustomerEntities,
  selectIds: selectCustomerIds,
  selectTotal: selectCustomerTotal,
} = customerStateAdapter.getSelectors();

export const customerFeatureKey = 'customer';

export const getCustomerFeature =
  createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectCustomers = createSelector(
  getCustomerFeature,
  selectAllCustomers
);
