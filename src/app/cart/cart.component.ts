import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import {CartService} from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  //defines the property that stores items in the cart:
  items;
  //define this property to store the Form model:
  checkoutForm;


  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    //displays the cart items for this instance/iteration of the cart
    this.items = this.cartService.getItems();

    //set the form property so that you can pull data from it later (uses FormBuilder group method):
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

   //method to process form:
  onSubmit(customerData){
    //process order here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  };

  ngOnInit() {
  }

}