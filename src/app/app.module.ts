import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HeadComponent } from './components/head/head.component';
import { CardComponent } from './components/card/card.component';
import { CardContainerComponent } from './components/card-container/card-container.component';
import { CommentCartComponent } from './components/comment-cart/comment-cart.component';
import { CartComponent } from './components/cart/cart.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthInterceptor } from './services/interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    HeadComponent,
    CardComponent,
    CardContainerComponent,
    CommentCartComponent,
    CartComponent,
    ReviewsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
