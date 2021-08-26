import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { AddcartComponent } from './addcart/addcart.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CheckitemsComponent } from './checkitems/checkitems.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';
import { ProductsComponent } from './products/products.component';

import { ProductlistComponent } from './productlist/productlist.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';

import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addcart', component: AddcartComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },

  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'checkitems', component: CheckitemsComponent },
  { path: 'productinfo', component: ProductinfoComponent },
  { path: 'addcart', component: AddcartComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'productlist', component:ProductlistComponent  },
  { path: 'productupdate/:product_Id', component:ProductupdateComponent  },

    {path: 'login',component:LoginComponent},
    {path: 'registration',component:RegistrationComponent},
    {path:'checkitems',component:CheckitemsComponent},
    {path:'productinfo',component:ProductinfoComponent},
    {path:'addcart',component:AddcartComponent},
    {path:'products',component:ProductsComponent},
    {path:'payment',component:PaymentComponent}
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  AboutusComponent,
  HomeComponent,
  ContactusComponent,
  LoginComponent,
  RegistrationComponent,
  CheckitemsComponent,
  ProductinfoComponent,
  AddcartComponent,
  ProductsComponent,
  PaymentComponent
  
];
