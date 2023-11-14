import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerDetails } from './model/customerDetails';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerDetailsService {

  constructor(private http: HttpClient) { }

  getCustomerDetails(id: number): Observable<CustomerDetails>{
    return this.http.get<CustomerDetails>("/api/customers/" + id);
  }
}
