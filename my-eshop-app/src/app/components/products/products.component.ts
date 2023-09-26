import { Component } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [];
  cartItems: Product[] = [];

  constructor () {
    const cartItemsFromStorage = localStorage.getItem('cartItems');
    if(cartItemsFromStorage !== null){
      this.cartItems = JSON.parse(cartItemsFromStorage);
    }
  }

  ngOnInit(): void {
    this.products.push(new Product(1, 'pen-drive', 50));
    this.products.push(new Product(2, 'CD-ROM', 75));
    this.products.push(new Product(3, 'tablet', 250));
    this.products.push(new Product(4, 'desktop', 500));
    this.products.push(new Product(5, 'laptop', 750));
  }

addToCart(product: Product): void{
  this.cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
}

}
