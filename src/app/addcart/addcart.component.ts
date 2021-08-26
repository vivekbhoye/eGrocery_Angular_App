import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../cartservice.service';
import { ProductserviceService } from '../productservice.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  constructor(
    private auth:AuthService,
    public restApi: ProductserviceService, 
    public resturl: CartserviceService,
    public router : Router){}
  products: any = [];
  
  @Input()
  cartDetails = {
    products:{
      product_Name: '',
      product_Price: ''
  
    }
  }

  ngOnInit(): void {
    this.loadProducts();
    this.CartDetails();
    this.loadCart();
  }
  getValues(val:any){
    console.warn(val)
  }
  loadProducts() {
    return this.restApi
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  addcart(){
    this.resturl.addCart(this.CartDetails).subscribe((data:{} ) =>{
      this.router.navigate(['/home']);
    })
  }




  getCartDetails:any=[];
  
  CartDetails(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'[]');
      console.log(this.getCartDetails);
      console.log(this.getCartDetails.product_Id);
    }
  }
  incQnt(product_Id: any,qnt: any){
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].product_Id===product_Id){
        if(qnt!=5)
        this.getCartDetails[i].qnt=parseInt(qnt)+1;
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  decQnt(product_Id: any,qnt: any){
    for(let i=0;i<this.getCartDetails.length;i++){
      if(this.getCartDetails[i].product_Id===product_Id){
        if(qnt!=1)
        this.getCartDetails[i].qnt=parseInt(qnt)-1;
      }
    }
    localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
    this.loadCart();
  }
  total:number=0;
  loadCart(){
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'[]');
      this.total=this.getCartDetails.reduce(function(acc: any,val: any){
        return acc+(val.product_Price);
      },0)
    }
  }
  removeall(){
    localStorage.removeItem('localCart');
    this.getCartDetails=[];
    this.total=0;
    this.cartNumber=0;
    this.auth.cartSubject.next(this.cartNumber);
  }
  singleDelete(getCartDetail: any){
    console.log(getCartDetail);
    if(localStorage.getItem('localCart')){
      this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'[]');
      for(let i=0;i<this.getCartDetails.length;i++){
        if(this.getCartDetails[i].product_Id===getCartDetail){
          this.getCartDetails.splice(i,1);
          localStorage.setItem('localCart',JSON.stringify(this.getCartDetails));
          this.loadCart();
          this.cartNumberFunc();
        }
      }
    }
  }
  cartNumber:number=0;
  cartNumberFunc(){
    var cartValue=JSON.parse(localStorage.getItem('localCart')||'[]');
    this.cartNumber=cartValue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  }
  
