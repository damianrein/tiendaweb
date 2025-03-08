import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Product } from '../../models/product';
import { Comments } from 'src/app/models/comments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private cart: Product[] = [];
  
  //private url = 'https://dummyjson.com/products';
  private url = 'https://fakestoreapi.com/products';

  private url2 = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<any>(this.url);
  }

  fetchProducts(): Observable<Product[]> {
    return this.http.get(this.url).pipe(
      map((response: any) => response.map((product: any) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        photos: product.image
      } as Product)))
    );
  }

  fetchProductById(id:number):Observable<Product>{
    const urls =  `${this.url}/${id}`;
    return this.http.get<any>(urls).pipe(
      map((product: any) => ({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        photos: product.image 
      } as Product))
    );
  }

/*
================================================================================================================
===================API PROPIA ==================================================================================
*/

  //fetchComments(idProduct: number):Observable<Comments[]>{
  //  return this.http.get<Comments[]>('$this.url2/comments/${idProduct}');
 // }
}
