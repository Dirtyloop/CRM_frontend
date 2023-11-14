import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomer(page: number, size: number): Observable<Page<Customer>> {
    return this.http.get<Page<Customer>>(`/api/customers?page=${page}&size=${size}`);
  }
}
