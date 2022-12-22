import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

customers: Customer[] = [];

constructor(private customerService: CustomerService) { }

ngOnInit(): void {
  this.getCustomer();
}

getCustomer() {
  this.customerService.getCustomer().subscribe(customers => this.customers = customers);
}

}
