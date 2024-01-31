import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { LoginComponent } from './pages/login/login.component';
import { RestaurantItemsComponent } from './pages/restaurant-items/restaurant-items.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

const routes: Routes = [
  {
    path:'',
    component:CategoriesComponent
},
{
    path:'Login',
    component:LoginComponent
},
{
    path:'foodCategory',
    component:CategoriesComponent
},
{
    path:'restaurant-items',
    component:RestaurantItemsComponent
},
{
    path:'create-orders',
    component:CreateOrderComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
