import { Component, OnInit } from '@angular/core';
import { CustomerDetails } from './model/customerDetails';
import { CustomerDetailsService } from './customer-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  customer!: CustomerDetails;

  constructor(private customerDetailsService: CustomerDetailsService, private router: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getCustomerDetails();
  }

  getCustomerDetails() {
    let id = this.router.snapshot.params['id'];
    this.customerDetailsService.getCustomerDetails(id)
    .subscribe(customer => this.customer = customer);
  }

}
