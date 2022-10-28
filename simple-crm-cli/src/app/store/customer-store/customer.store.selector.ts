import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState } from './customer.store';
import {
  customerFeatureKey,
  customerStateAdapter,
} from './customer.store.model';

const { selectAll } = customerStateAdapter.getSelectors();

const getCustomerFeature =
  createFeatureSelector<CustomerState>(customerFeatureKey);

export const selectCustomers = createSelector(getCustomerFeature, selectAll);
