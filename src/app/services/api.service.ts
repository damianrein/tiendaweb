import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://fakestoreapi.com/';

  constructor(private http:HttpClient) { }

  fetchAll(){
    return this.http.get<any>(this.url);
  }
}
