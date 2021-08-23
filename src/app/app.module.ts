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
import { HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './productservice.service';
=======
import { ProductsComponent } from './products/products.component';
>>>>>>> d58d6eeb4d2dbe337d28bd59effbbb76cad14795
=======
import { HttpClientModule } from '@angular/common/http';
import { ProductserviceService } from './productservice.service';
import { ProductsComponent } from './products/products.component';


>>>>>>> de7ef90dfee8b6a79be172d820d319ce05bc1f64

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