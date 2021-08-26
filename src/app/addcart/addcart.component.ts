<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/Cart';
import { CartserviceService } from '../cartservice.service';
>>>>>>> master
import { ProductserviceService } from '../productservice.service';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
<<<<<<< HEAD
  constructor(private auth:AuthService,public restApi: ProductserviceService){}
  products: any = [];

  ngOnInit(): void {
    this.loadProducts();
=======
  constructor(
    private auth:AuthService,
    public restApi: ProductserviceService, 
    public resturl: CartserviceService,
    public router : Router){}
  products: any = [];
  // cart!: Cart;
  
  ngOnInit(): void {
    // this.loadProducts();
>>>>>>> master
    this.CartDetails();
    this.loadCart();
    console.log(this.getCartDetails);
  }
<<<<<<< HEAD
  loadProducts() {
    return this.restApi
      .getProducts()
      .subscribe((data) => (this.products = data));
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
=======
  getValues(val:any){
    console.warn(val)
  }
  loadProducts() {
    return this.restApi
    .getProducts()
    .subscribe((data) => (this.products = data));
  }
  addcart(){
    this.resturl.addCart(this.cartDetails).subscribe((data:{} ) =>{
      this.router.navigate(['/payment']);
    })
    // console.log("sa "+this.getCartDetails[0]);
    this.removeall();
  }
  
  // checkout(){
    //   this.resturl.checkout(this.getCartDetails[0]).subscribe((data:{} ) =>{

      // }
      
      
      
      getCartDetails:any=[];
      
      
      CartDetails(){
        if(localStorage.getItem('localCart')){
          this.getCartDetails=JSON.parse(localStorage.getItem('localCart')||'[]');
          console.log(this.getCartDetails);
          console.log("ss");
          console.log(this.cartDetails);
          // console.log(this.getCartDetails.product_Id);
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
>>>>>>> master
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

  cartDetails= {
    no_Of_Items: (JSON.parse(localStorage.getItem('localCart')||'[]')).length,
    total_Amount:(JSON.parse(localStorage.getItem('localCart')||'[]')).reduce(function(acc: any,val: any){
      return acc+(val.product_Price);
    },0),
    products: JSON.parse(localStorage.getItem('localCart')||'[]')  
  }
}

