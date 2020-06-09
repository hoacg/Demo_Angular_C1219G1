import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../models/customer';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css']
})
export class ComponentListComponent implements OnInit {

  customerList: Customer[];
  constructor(private customersService: CustomerService) { }

  ngOnInit() {
     // this.customerList = this.customersService.getAll();
    this.customersService.getAll().subscribe( result => {
      this.customerList = result;
    });
  }

}
