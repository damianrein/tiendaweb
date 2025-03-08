import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CommentCartComponent } from "../../components/comment-cart/comment-cart.component";
import { Location } from '@angular/common';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  standalone:false
  //imports: [CommentCartComponent]
})
export class ProductComponent implements OnInit {

  @Input() product?:Product;
  @Input() productId?:number;
  //comments: any;
  
  constructor(private route: ActivatedRoute, private productService: ApiService) {}

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    if (productId) {
      this.productService.fetchProductById(productId).subscribe(product => {
        this.product = product;
      });
    }
  }
}
