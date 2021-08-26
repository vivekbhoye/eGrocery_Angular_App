import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Cart } from 'src/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private resturl: string = 'http://localhost:8080/eGrocery_Spring_App/cart';


  constructor(private http: HttpClient) {}

  
  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

 
      }


  

