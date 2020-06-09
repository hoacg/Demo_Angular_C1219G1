import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent {

  userForm: FormGroup = new FormGroup({
    fullname: new FormControl('', [
      Validators.minLength(10),
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.minLength(20),
      Validators.required
    ])
  });


  constructor(private customersService: CustomerService) {
  }


  obSubmit() {
    this.customersService.add(this.userForm.value);
    this.userForm.reset();
  }

}
