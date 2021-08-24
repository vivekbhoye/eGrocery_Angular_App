import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductinfoComponent } from '../productinfo/productinfo.component';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  fakepath_url!: string;
  products: any = [];
  constructor(
    public router : Router,
    public aroute : ActivatedRoute,
    public restApi : ProductserviceService
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }
  

  loadProducts(){
    return this.restApi
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

    
 

  
}
