import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminAcunitUpdate } from './model/adminAcunitUpdate';

@Injectable({
  providedIn: 'root'
})
export class AdminAcunitUpdateService {

  constructor(private http: HttpClient) { }

  getAcunit(id: number): Observable<AdminAcunitUpdate> {
    return this.http.get<AdminAcunitUpdate>("/api/admin/acunits/" + id);
  }

  saveAcunit(id: number, value: AdminAcunitUpdate) {
    return this.http.put<AdminAcunitUpdate>("/api/admin/acunits/" + id, value);
  }
}
