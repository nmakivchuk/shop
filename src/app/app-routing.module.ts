import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: 'cart',
  // loadChildren: 'app/shopping-cart/shopping-cart.module#ShoppingCartModule'
  component: CartComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
