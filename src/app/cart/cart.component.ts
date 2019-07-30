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

  constructor(private cartService: CartService, private formBuilder: FormBuilder) { 
    //displays the cart items for this instance/iteration of the cart
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}