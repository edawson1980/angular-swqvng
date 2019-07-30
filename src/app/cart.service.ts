import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class CartService {
  //items holds the list of what's currently in the cart
  items = [];

  //to add items to cart:
  addToCart(product){
    this.items.push(product);
  }

  //to display what is in cart:
  getItems(){
    return this.items;
  }

  //to clear the cart (reset cart to an empty array):
  clearCart(){
    this.items = [];
    return this.items;
  }

  //retrieve shipping data:
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(private http: HttpClient) { }

}