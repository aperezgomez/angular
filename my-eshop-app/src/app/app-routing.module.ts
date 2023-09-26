import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'home' , component:HomeComponent},
  {path: 'products' , component:ProductsComponent},
  {path: 'cart' , component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
