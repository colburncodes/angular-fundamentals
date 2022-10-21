import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../customer.model';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss'],
})
export class CustomerDetailComponent implements OnInit {
  customerId: number;
  customer: Customer | undefined;
  detailForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private customerService: CustomerService,
    private fb: FormBuilder,
    private sb: MatSnackBar
  ) {
    this.customerId = +this.route.snapshot.params['id'];

    this.detailForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: [''],
      emailAddress: ['', [Validators.required, Validators.email]],
      preferredContactMethod: ['email'],
    });
  }

  ngOnInit(): void {
    this.customerService.get(this.customerId).subscribe({
      next: (c) => {
        if (c) {
          this.customer = c;
          this.detailForm.patchValue(c);
        }
      },
      error: (error) => {
        // TODO: Handle the error
      },
    });
  }

  save() {
    if (!this.detailForm.valid) {
      return;
    }
    const customer = { ...this.customer, ...this.detailForm.value };
    this.customerService.update(customer).subscribe({
      next: (result) => {
        // TODO: show a snackbar message
        this.sb.open('Customer saved', 'OK');
      },
      error: (err) => {
        // TODO:  show a snackbar message
        this.sb.open('Error updating customer record', 'OOPS', err);
      },
    });
  }
}
