import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'productupdate',
  templateUrl: './productupdate.component.html',
  styleUrls: ['./productupdate.component.css']
})
export class ProductupdateComponent implements OnInit {
  productData: any = {};

  constructor(
    public router: Router,
    public aroute: ActivatedRoute,
    public restApi: ProductserviceService
    ) {}
    
  product_Id = this.aroute.snapshot.params['product_Id'];
  
  ngOnInit(): void {
    this.restApi
      .getAProduct(this.product_Id)
      .subscribe((data) => (this.productData = data));
  }

  updateProduct() {
    if (window.confirm('Are you sure , you want to update?')) {
      this.restApi.updateProduct(this.productData).subscribe((data: {}) => {
        this.router.navigate(['/productlist']);
      });
    }
  }

}
