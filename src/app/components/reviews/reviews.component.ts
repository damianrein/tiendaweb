import { Component, OnInit, Output } from '@angular/core';
import { CommentCartComponent } from "../comment-cart/comment-cart.component";
import { Comments } from 'src/app/models/comments';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  //imports: [CommentCartComponent],
  standalone:false
})
export class ReviewsComponent implements OnInit {

  comments : Comments [] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
