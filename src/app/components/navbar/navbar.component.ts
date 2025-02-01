import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone:false
})
export class NavbarComponent implements OnInit {

  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
