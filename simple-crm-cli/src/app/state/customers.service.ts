// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { NgEntityService, NgEntityServiceConfig } from "@datorama/akita-ng-entity-service";
// import { Observable } from "rxjs";
// import { Customer } from "../customer/customer.model";
// import { CustomerService } from "../customer/customer.service";
// import { CustomersStore } from "./customers.store";

// @NgEntityServiceConfig({
//   resourceName: 'customers',
//   baseUrl: 'customBaseUrl',
// })

// @Injectable({providedIn: 'root'})
// export class CustomersService {
//   term: string;
//   constructor(protected store: CustomersStore,
//     private customerService: CustomerService,
//     private http: HttpClient){}

//     get(): Observable<Customer[]> {
//       const request = this.customerService.search()
//     }
//   //   searchCustomer$ = createEffect(() =>
//   //   this.actions$.pipe(
//   //     ofType(customerSearchAction),
//   //     switchMap(({ criteria }) => {
//   //       return this.customerService.search(criteria.term).pipe(
//   //         tap((data) => console.log(data)),
//   //         map((data) => {
//   //           return customersSearchCompleteAction({ result: data });
//   //         }),
//   //         catchError((err) => {
//   //           console.error(err);
//   //           return EMPTY;
//   //         })
//   //       );
//   //     })
//   //   )
//   // );
// }
