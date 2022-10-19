import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CustomerService } from './customer.service';
import { CustomerMockService } from './customer-mock.service';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [CustomerListPageComponent],
  imports: [CommonModule, CustomerRoutingModule, MatTableModule, MatCardModule],
  providers: [
    {
      provide: CustomerService,
      useClass: environment.production ? CustomerService : CustomerMockService,
    },
  ],
})
export class CustomerModule {}
