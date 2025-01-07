import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/app/models/comments';

@Component({
  selector: 'app-comment-cart',
  templateUrl: './comment-cart.component.html',
  styleUrls: ['./comment-cart.component.css']
})
export class CommentCartComponent implements OnInit {

  @Input() comment?:Comments;
  
  constructor() { }

  ngOnInit(): void {
  }

}
