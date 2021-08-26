import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

 
  @Input()
  paymentDetails = {
    fullName:'',
    email:'',
    Address:'',
    city:'',
    state:'',
    zip:'',
    nameOnCard: '',
    CardNumber:''
  }

  constructor(
    public resturl :PaymentserviceService, 
    public router : Router) { }

  ngOnInit(): void {
  }

  getValues(val:any){
    console.warn(val)
  }

  addProduct(){
    this.resturl.savePayment(this.paymentDetails).subscribe((data:{} )=>{
      this.router.navigate(['/home']);
    })
  }

}
