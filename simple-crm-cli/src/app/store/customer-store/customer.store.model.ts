export interface CustomerSearchCriteria {
  term: string;
}

export type SearchStatus = '' | 'searching...' | 'complete';

// export interface CustomerState extends EntityState<Customer> {
//   searchStatus: SearchStatus;
//   criteria: CustomerSearchCriteria;
// }
