import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
import { RegistrationService } from './../registration.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user=new User();
  msg='';
  constructor(private _service:RegistrationService, private _router : Router) {}

  ngOnInit() {
  }
  loginUser(){
     this._service.loginUserFromRemote(this.user).subscribe(
       data =>{ console.log("response received");

       this._router.navigate (['/products'])
      } ,
       error =>{ console.log("exception occured")
       this.msg="Bad credentials,please enter valid emailId and password";
    }
     )
  }
  gotoregistration(){
    this._router.navigate (['/registration'])
  }
}
