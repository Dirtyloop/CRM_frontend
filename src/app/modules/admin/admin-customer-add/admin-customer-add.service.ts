import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCustomerUpdate } from '../admin-customer-update/model/adminCustomerUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerAddService {

  constructor(private http: HttpClient) { }

  saveNewCustomer(customer: AdminCustomerUpdate): Observable<AdminCustomerUpdate> {
    return this.http.post<AdminCustomerUpdate>("/api/admin/customers", customer);
  }
}