import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ApiService } from 'src/app/services/api/api.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone:false
})
export class CartComponent implements OnInit {
checkout() {
throw new Error('Method not implemented.');
}
removeFromCart(arg0: number) {
throw new Error('Method not implemented.');
}

  cart: Product[] = [];
  total: number = 0;

  constructor(private cartService: ApiService) {}

  ngOnInit() {
  }

}
