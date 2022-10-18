import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [CustomerListPageComponent],
  imports: [CommonModule, CustomerRoutingModule, MatTableModule, MatCardModule],
})
export class CustomerModule {}
