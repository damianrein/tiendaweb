import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CommentCartComponent } from "../../components/comment-cart/comment-cart.component";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone:false
  //imports: [CommentCartComponent]
})
export class ProductComponent implements OnInit {

  @Input() product?:Product;
  //comments: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
