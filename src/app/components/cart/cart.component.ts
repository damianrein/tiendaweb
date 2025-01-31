import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Product[] = [];
  total: number = 0;

  constructor(private cartService: ApiService) {}

  ngOnInit() {
    this.cart = this.cartService.getCart();
    this.updateTotal();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.updateCart();
  }

  updateCart() {
    this.cart = this.cartService.getCart();
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cart.reduce((sum, product) => sum + product.price * product.quantity, 0);
  }

  checkout() {
    this.cartService.checkout().subscribe(response => {
      console.log('Compra realizada con éxito:', response);
      this.cartService.clearCart();
      this.updateCart();
    }, error => {
      console.error('Error al realizar la compra:', error);
    });
  }
}
