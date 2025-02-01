import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone:false
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.fetchProducts;
  }

  goToProductDetail(productId: number): void {
    this.router.navigate([`/product/${productId}`]);
  }
}
