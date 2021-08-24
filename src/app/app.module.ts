import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';

import { ContactusComponent } from './contactus/contactus.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AddcartComponent } from './addcart/addcart.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { CheckitemsComponent } from './checkitems/checkitems.component';
import { ProductinfoComponent } from './productinfo/productinfo.component';

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======


>>>>>>> e1e349f6a0e3eb56cda032b9651b057c654b57a9
import { HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './productservice.service';
import { ProductsComponent } from './products/products.component';

import { PaymentComponent } from './payment/payment.component';


<<<<<<< HEAD
>>>>>>> master
=======

>>>>>>> e1e349f6a0e3eb56cda032b9651b057c654b57a9
import { HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './productservice.service';
import { ProductsComponent } from './products/products.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductupdateComponent } from './productupdate/productupdate.component';




<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> master
=======



>>>>>>> e1e349f6a0e3eb56cda032b9651b057c654b57a9

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddcartComponent,
    LoginComponent,
    RegistrationComponent,
    CheckitemsComponent,
    ProductinfoComponent,
    ProductsComponent,
<<<<<<< HEAD
<<<<<<< HEAD
    ProductlistComponent,
    ProductupdateComponent,
=======
    PaymentComponent,
>>>>>>> master
=======

    ProductlistComponent,
    ProductupdateComponent,

    PaymentComponent,
r
>>>>>>> e1e349f6a0e3eb56cda032b9651b057c654b57a9
    
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule],
  providers: [ProductserviceService],
  bootstrap: [AppComponent],
})
export class AppModule {}