import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone:false
})
export class CardComponent implements OnInit {

  @Input() product?: Product;

  @Output() product2?: Product;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
/*
  goToProductDetail(productId: number): void {
    this.router.navigate([`/product/${productId}`]);
  }
    goToProductDetail(): void {
    this.router.navigate(['/product', this.product?.id], { state: { product: this.product } });
*/

goToProductDetail(): void {
  this.router.navigate(['/product', this.product?.id]);
}
  }



