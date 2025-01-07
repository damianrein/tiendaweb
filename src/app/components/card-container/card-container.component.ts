import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  products: Product[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.fetchProducts().subscribe((products: Product[]) => {
      this.products = products;
    });
  }

}
