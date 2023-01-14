import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admin-customer-add',
  templateUrl: './admin-customer-add.component.html',
  styleUrls: ['./admin-customer-add.component.scss']
})
export class AdminCustomerAddComponent implements OnInit {

  customerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

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

  }

}
