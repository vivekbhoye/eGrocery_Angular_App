import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentserviceService } from '../paymentservice.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  paymentForm!: FormGroup;
  displayMessage!: string;

 
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
    public router : Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    this.paymentForm = this.formBuilder.group({
      nameOnCard: ['', [Validators.required,Validators.minLength(1),Validators.pattern('^[A-Za-z][A-Za-z -]*$')]],
      cardNumber: ['', [Validators.required,Validators.minLength(16),Validators.min(1111111111111111),Validators.max(9999999999999999)]],
      expirationMonth: ['', [Validators.required,Validators.minLength(1),Validators.maxLength(2),Validators.min(1),Validators.max(12)]],
      expirationYear: ['', [Validators.required,Validators.minLength(4),Validators.maxLength(4),Validators.min(1111),Validators.max(9999)]],
      cardCVVNumber: ['', [Validators.required,Validators.minLength(3),Validators.maxLength(3),Validators.min(111),Validators.max(999)]]
    });
  }

 // convenience getter for easy access to form fields
 get f() { return this.paymentForm.controls; }

  getValues(val:any){
    console.warn(val)
  }

  addProduct(){
    this.resturl.savePayment(this.paymentDetails).subscribe((data:{} )=>{
      window.alert("Payment is successful! And order will be delivered by today.")
      this.router.navigate(['/home']);
    })

  }

  onSubmit() {
    this.submitForm();
    }
  
    submitForm() {
      /* Change the display message on button click / submit form */
    // stop here if form is invalid
    if (this.paymentForm.invalid) {
      this.displayMessage = "Payment Failed!";
        return;
    }
      this.displayMessage = "Payment Successful!";
    }

}
