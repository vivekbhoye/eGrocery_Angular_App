import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

<<<<<<< HEAD
=======


>>>>>>> master
import { ActivatedRoute, Router } from '@angular/router';
import { ProductinfoComponent } from '../productinfo/productinfo.component';
import { ProductserviceService } from '../productservice.service';

import { AuthService } from '../_service/auth.service';


@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
<<<<<<< HEAD
  
=======

  fakepath_url!: string;

>>>>>>> master
  products: any = [];

  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: ProductserviceService,
    private auth: AuthService
  ) {}
<<<<<<< HEAD

  cartDataNull: undefined;
=======

  cartDataNull: undefined;

>>>>>>> master

  ngOnInit(): void {
    this.loadProducts();
  }
<<<<<<< HEAD
=======

  loadProducts() {
    return this.restApi
      .getProducts()
      .subscribe((data) => (this.products = data));
  }
>>>>>>> master

  loadProducts() {
    return this.restApi
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

<<<<<<< HEAD
=======
    
>>>>>>> master
  productArray = [
    {
      product_Id: 1,
      img: '../assets/g1.jpg',
      amt: 500,
      qnt: 1,
    },
    {
      product_Id: 2,
      img: '../assets/g1.jpg',
      amt: 800,
      qnt: 1,
    },
    {
      product_Id: 3,
      img: '../assets/logo.png',
      amt: 800,
      qnt: 1,
    },
  ];
  inc(prod: { qnt: any }) {
    //console.log(prod.qnt);
    if (prod.qnt != 5) {
      prod.qnt = prod.qnt + 1;
    }
  }
  dec(prod: { qnt: any }) {
    //console.log(prod.qnt);
    if (prod.qnt != 1) {
      prod.qnt = prod.qnt - 1;
    }
  }
  itemsCart: any = [];
<<<<<<< HEAD
=======
  
>>>>>>> master
  addCart(category: { product_Id: any; qnt: any }) {
    console.log(category);
    let cartDataNull = localStorage.getItem('localCart');
    if (cartDataNull == null) {
      let storeDataGet: any = [];
      storeDataGet.push(category);
      localStorage.setItem('localCart', JSON.stringify(storeDataGet));
    } else {
      var id = category.product_Id;
      console.log(id);
      let index: number = -1;
      this.itemsCart = JSON.parse(localStorage.getItem('localCart') || '[]');
      console.log(this.itemsCart);
      for (let i = 0; i < this.itemsCart.length; i++) {
        if (parseInt(id) === parseInt(this.itemsCart[i].product_Id)) {
          this.itemsCart[i].qnt = category.qnt;
          index = i;
          break;
        }
      }
      console.log(this.itemsCart);
      if (index == -1) {
        this.itemsCart.push(category);
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      } else {
        localStorage.setItem('localCart', JSON.stringify(this.itemsCart));
      }
    }

    this.cartNumberFunc();
  }
  cartNumber: number = 0;
  cartNumberFunc() {
    var cartValue = JSON.parse(localStorage.getItem('localCart') || '[]');
    this.cartNumber = cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
<<<<<<< HEAD
=======

>>>>>>> master
}
