import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private router: ActivatedRoute, private adminCustomerUpdateService: AdminCustomerUpdateService, private formBuilder: FormBuilder) { }

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
    .subscribe(customer => this.customerForm.setValue({
      name: customer.name,
      company: customer.company,
      nip: customer.nip,
      street: customer.street,
      postalCode: customer.postalCode,
      city: customer.city,
      units: customer.units,
      inspected: customer.inspected
    }));
  }

}
