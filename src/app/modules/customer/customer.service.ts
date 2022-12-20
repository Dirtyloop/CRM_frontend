import { Injectable } from '@angular/core';
import { Customer } from './model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  getCustomer(): Customer[] {
    return [
      {
        name: "Jan Nowak",
        company: "",
        nip: "",
        street: "Porzeczkowa 13",
        postalCode: "80-333",
        city: "Gdańsk",
        units: 2,
        inspected: false
      },
      {
        name: "Misionel Lessi",
        company: "Lessi",
        nip: "5558882324",
        street: "Jabłuszkowa 5",
        postalCode: "80-444",
        city: "Gdańsk",
        units: 1,
        inspected: false
      },
      {
        name: "Krystyna Ronaldo",
        company: "",
        nip: "",
        street: "Cierpka 2",
        postalCode: "80-222",
        city: "Gdańsk",
        units: 3,
        inspected: true
      }
    ];
  }

}
