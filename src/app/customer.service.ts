import { Injectable } from '@angular/core';
import { Customer } from './models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customersList: Customer[] = [];

  constructor() { }

  add(customer: Customer) {
    this.customersList.push(customer);
  }

  getAll(): Customer[] {
    return this.customersList;
  }
}
