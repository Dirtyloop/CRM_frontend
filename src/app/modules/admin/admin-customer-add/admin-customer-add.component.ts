import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminCustomerAddService } from './admin-customer-add.service';

@Component({
  selector: 'app-admin-customer-add',
  templateUrl: './admin-customer-add.component.html',
  styleUrls: ['./admin-customer-add.component.scss']
})
export class AdminCustomerAddComponent implements OnInit {

  customerForm!: FormGroup;
  durationInSeconds = 3;

  constructor(
    private formBuilder: FormBuilder,
    private adminCustomerAddService: AdminCustomerAddService,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) { }

  ngOnInit(): void {

    this.customerForm = this.formBuilder.group({
      name: [''],
      company: [''],
      nip: [''],
      street: [''],
      postalCode: [''],
      city: [''],
      units: [''],
      inspected: ['']
    })
  }

  onSaveClick() {
    this.adminCustomerAddService.saveNewCustomer(this.customerForm.value)
      .subscribe({
        next: customer => {
          this.router.navigate(["/admin/customers"])
            .then(() => this.snackBar.open("New Customer added", 'Added', { duration: this.durationInSeconds * 1000 }))
        },
        error: err => this.adminMessageService.addSpringErrors(err.error)
      })
  }

}
