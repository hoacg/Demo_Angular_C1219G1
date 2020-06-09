import { Injectable } from '@angular/core';
import { Customer } from './models/customer';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl = 'http://localhost:5000/api/customers';

  constructor(private httpClient: HttpClient) { }

  add(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiUrl, customer);
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiUrl);
  }
}
