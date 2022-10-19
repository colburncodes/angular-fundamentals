import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-create-dialog',
  templateUrl: './customer-create-dialog.component.html',
  styleUrls: ['./customer-create-dialog.component.scss'],
})
export class CustomerCreateDialogComponent implements OnInit {
  detailForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CustomerCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer | null,
    private fb: FormBuilder
  ) {
    this.detailForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      phoneNumber: [''],
      emailAddress: [''],
      preferredContactMethod: ['email'],
    });
    if (this.data) {
      this.detailForm.patchValue(this.data); // the patchValue function updates the form input values.
    }
  }

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const customer = {};
    this.dialogRef.close(customer);
  }
}
