import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminAcunitUpdate } from '../admin-acunit-update/model/adminAcunitUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminAcunitAddService {

  constructor(private http: HttpClient) { }

  saveNewAcunit(acunit: AdminAcunitUpdate): Observable<AdminAcunitUpdate> {
    return this.http.post<AdminAcunitUpdate>("/api/admin/acunits", acunit);
  }
}
