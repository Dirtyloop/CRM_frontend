import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { Observable } from 'rxjs';
import { Page } from 'src/app/shared/model/page';
import { AdminCustomer } from './adminCustomer';


@Injectable({
  providedIn: 'root'
})
export class AdminCustomerService {
  
  constructor(private http: HttpClient) { }
  
  getCustomer(sort: String, order: SortDirection, page: number, size: number): Observable<Page<AdminCustomer>> {
    return this.http.get<Page<AdminCustomer>>(`/api/admin/customers?page=${page}&size=${size}&sort=${sort},${order}`);
  }
  
  delete(id: number): Observable<void> {
    return this.http.delete<void>('/api/admin/customers/' + id);
  }
}
