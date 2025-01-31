import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {

  isMenuActive = false;
  isCartVisible = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  toggleCart() {
    this.isCartVisible = !this.isCartVisible;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
