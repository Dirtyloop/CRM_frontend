import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminCustomerUpdateService } from './admin-customer-update.service';
import { AdminCustomerUpdate } from './model/adminCustomerUpdate';

@Component({
  selector: 'app-admin-customer-update',
  templateUrl: './admin-customer-update.component.html',
  styleUrls: ['./admin-customer-update.component.scss']
})
export class AdminCustomerUpdateComponent implements OnInit {

  customer!: AdminCustomerUpdate;
  customerForm!: FormGroup;
  durationInSeconds = 3;

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private adminCustomerUpdateService: AdminCustomerUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) { }

  ngOnInit(): void {
    this.getCustomer();

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

  getCustomer() {
    let id = Number(this.activatedRouter.snapshot.params['id']);
    this.adminCustomerUpdateService.getCustomer(id)
      .subscribe(customer => this.mapFormValues(customer));
  }

  onSaveClick() {
    let id = Number(this.activatedRouter.snapshot.params['id']);
    this.adminCustomerUpdateService.saveCustomer(id, this.customerForm.value).subscribe({
      next: customer => {
        this.router.navigate(["/admin/customers"])
          .then(() => this.snackBar.open("Customer saved", 'Updated', { duration: this.durationInSeconds * 1000 }));
      },
      error: err => this.adminMessageService.addSpringErrors(err.error)
    });
  }

  private mapFormValues(customer: AdminCustomerUpdate): void {
    return this.customerForm.setValue({
      name: customer.name,
      company: customer.company,
      nip: customer.nip,
      street: customer.street,
      postalCode: customer.postalCode,
      city: customer.city,
      units: customer.units,
      inspected: customer.inspected
    });
  }

}
