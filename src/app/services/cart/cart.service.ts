import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Product[] = [];

  private url = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(p => p.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  getCart() {
    return [...this.cart];
  }

  clearCart() {
    this.cart = [];
  }

  checkout(): Observable<any> {
    return this.http.post('/api/checkout', { products: this.cart });
  }
}
