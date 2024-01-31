import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CreateOrderComponent,
    LoginComponent,
    RestaurantItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
