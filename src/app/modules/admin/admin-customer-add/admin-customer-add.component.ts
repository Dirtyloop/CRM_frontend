import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name: ['', [Validators.required, Validators.minLength(3)]],
      company: [''],
      nip: [''],
      street: ['', [Validators.required, Validators.minLength(3)]],
      postalCode: ['', [Validators.required, Validators.minLength(3)]],
      city: ['', [Validators.required, Validators.minLength(3)]],
      units: ['', [Validators.required, Validators.min(0)]],
      inspected: ['', Validators.required]
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
