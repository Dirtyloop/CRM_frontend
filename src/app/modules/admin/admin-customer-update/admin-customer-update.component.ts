import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
    private router: ActivatedRoute,
    private adminCustomerUpdateService: AdminCustomerUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getCustomer();

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

  getCustomer() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminCustomerUpdateService.getCustomer(id)
    .subscribe(customer => this.mapFormValues(customer));
  }

  onSaveClick() {
    let id = Number(this.router.snapshot.params['id']);
    this.adminCustomerUpdateService.saveCustomer(id, this.customerForm.value).subscribe(customer => {
      this.mapFormValues(customer);
      this.snackBar.open("Customer saved", '', {duration: this.durationInSeconds*1000});
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
