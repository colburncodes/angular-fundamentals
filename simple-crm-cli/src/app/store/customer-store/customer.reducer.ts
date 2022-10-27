import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Customer } from 'src/app/customer/customer.model';

export const adaptor: EntityAdapter<Customer[]> =
  createEntityAdapter<Customer[]>();
