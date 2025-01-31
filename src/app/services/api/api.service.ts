import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cart: Product[] = [];
  
  private url = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<any>(this.url);
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get(this.url).pipe(
      map((response: any) => response.products.map((product: any) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        photos: product.images.map((image: string) => ({ id: 1, url: image }))
      } as Product)))
    );
  }

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
