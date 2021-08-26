import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  @Input()
  productDetails = {
    product_Name: '',
    product_Category: '',
    product_img: '',
    product_Price: '',
    product_Review: '',
    product_Description: ''
  }

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

 

  deleteEmployee(product_Id: any){
    this.restApi.deleteProduct(product_Id).subscribe((data: {})=> {
      this.loadProducts();
    });
  }

  
  
   

}
