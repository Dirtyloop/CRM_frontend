import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Page } from 'src/app/shared/model/page';
import { CustomerService } from './customer.service';
import { Customer } from './model/customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

customers: Customer[] = [];
page!: Page<Customer>;

constructor(private customerService: CustomerService) { }

ngOnInit(): void {
  this.getCustomer();
}

getCustomer() {
  this.getCustomerPage(0, 10);
}

onPageEvent(event: PageEvent){
  this.getCustomerPage(event.pageIndex, event.pageSize);
}

private getCustomerPage(page: number, size: number) {
  this.customerService.getCustomer(page, size).subscribe(page => this.page = page);
}

}
