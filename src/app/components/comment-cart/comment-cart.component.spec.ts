import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentCartComponent } from './comment-cart.component';

describe('CommentCartComponent', () => {
  let component: CommentCartComponent;
  let fixture: ComponentFixture<CommentCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentCartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
