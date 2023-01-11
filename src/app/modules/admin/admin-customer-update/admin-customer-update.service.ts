import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminCustomerUpdate } from './model/adminCustomerUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminCustomerUpdateService {

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<AdminCustomerUpdate> {
    return this.http.get<AdminCustomerUpdate>("/api/admin/customers/" + id);
  }
}
