import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Customer } from '../customer.model';

@Component({
  selector: 'app-customer-create-dialog',
  templateUrl: './customer-create-dialog.component.html',
  styleUrls: ['./customer-create-dialog.component.scss'],
})
export class CustomerCreateDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CustomerCreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer | null
  ) {}

  ngOnInit(): void {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const customer = {};
    this.dialogRef.close(customer);
  }
}
