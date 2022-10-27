import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, of, switchMap, tap } from 'rxjs';
import { map } from 'rxjs/operators';
import { CustomerService } from '../../customer/customer.service';
import {
  customerSearchAction,
  customersSearchCompleteAction,
} from './customer.store';

// ngrx effects that trigger side effects for specific actions.
@Injectable()
export class CustomerStoreEffects {
  constructor(
    private actions$: Actions, // <-- this event stream is where to listen for dispatched actions
    private customerService: CustomerService // <-- this is your service to be called for some actions
  ) {}

  // TODO: add effect functions here
  searchCustomer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(customerSearchAction),
      switchMap(({ criteria }) => {
        return this.customerService.search(criteria.term).pipe(
          map((data) => customersSearchCompleteAction({ result: data })),
          catchError((err) => {
            console.error(err);
            return EMPTY;
          })
        );
      })
    )
  );
}
