import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';

const routes: Routes = [
  {path: "", component: ProductsComponent},
  {path: "user/login", component: LoginComponent},
  {path: "user/register", component: RegisterComponent},
  {path: "products", component: ProductsComponent},
  {path: "products/add", component: AddProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
