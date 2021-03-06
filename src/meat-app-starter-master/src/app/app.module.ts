import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { HomeComponent } from '../app/home/home.component';
import { AboutComponent } from '../app/about/about.component';
import { RestaurantsComponent } from '../app/restaurants/restaurants.component';
import { RestaurantComponent } from '../app/restaurants/restaurant/restaurant.component'
import { RestaurantsService } from '../app/restaurants/restaurants.service';
import { RestaurantDetailComponent } from '../app/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from '../app/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from '../app/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from '../app/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from '../app/restaurant-detail/reviews/reviews.component'
import { ShoppingCartService } from '../app/restaurant-detail/shopping-cart/shopping-cart.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantsService, ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
