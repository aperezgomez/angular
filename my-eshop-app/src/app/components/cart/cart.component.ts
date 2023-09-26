import { Component } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent {
  cartItems: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    const items = localStorage.getItem('cartItems');
    if(items) {
      this.cartItems = JSON.parse(items);
    }
  }

  RemoveFromCart(cartItem: Product): void {
    let removalIndex = -1;
    for(let i = 0; i < this.cartItems.length; i++){
      if(this.cartItems[i].id === cartItem.id){
        removalIndex = i;
        break;
      }
    }
    if (removalIndex !== -1) {
      this.cartItems.splice(removalIndex, 1);
    }
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

}
