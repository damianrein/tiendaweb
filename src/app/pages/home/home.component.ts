import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:false
})
export class HomeComponent implements OnInit {
  products: Product[] = [];

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    //this.api.fetchProducts;
    this.api.fetchProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

  goToProductDetail(productId: number): void {
    this.router.navigate([`/product/${productId}`]);
  }
}