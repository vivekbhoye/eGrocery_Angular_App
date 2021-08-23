import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  @Input()
  productDetails = {
    product_Name: '',
    product_Category: '',
    product_img: '',
    product_Price: '',
    product_Review: '',
    product_Description: ''
  }

  constructor(public resturl :ProductserviceService, public router : Router) { }

  ngOnInit(): void {
  }
  getValues(val:any){
    console.warn(val)
  }

  addProduct(){
    this.resturl.addProduct(this.productDetails).subscribe((data:{} )=>{
      this.router.navigate(['/home']);
    })

  }
}
