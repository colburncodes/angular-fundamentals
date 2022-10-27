import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerListPageComponent } from './customer-list-page/customer-list-page.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { CustomerService } from './customer.service';
import { CustomerMockService } from '../customer/customer-mock.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CustomerCreateDialogComponent } from './customer-create-dialog/customer-create-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatusIconPipe } from './status-icon.pipe';
import { EffectsModule } from '@ngrx/effects';
import { CustomerStoreEffects } from '../store/customer.store.effects';
import { StoreModule } from '@ngrx/store';
import {
  customerFeatureKey,
  customerReducer,
} from '../store/customer-store/customer.store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    CustomerListPageComponent,
    CustomerCreateDialogComponent,
    CustomerDetailComponent,
    StatusIconPipe,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    StoreModule.forFeature(customerFeatureKey, customerReducer),
    EffectsModule.forFeature([CustomerStoreEffects]),
  ],
  providers: [
    {
      provide: CustomerService,
      useClass: CustomerMockService,
    },
  ],
})
export class CustomerModule {}
