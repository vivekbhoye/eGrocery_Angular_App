import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { Observable } from 'rxjs';
=======
import { Observable, throwError } from 'rxjs';
>>>>>>> master
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

<<<<<<< HEAD
  addcart(cart:any):Observable<Cart>{
    return this.http
      .post<Cart>(
        this.resturl + '/createCart',
        JSON.stringify(cart),
        this.httpOptions
        )
        .pipe(retry(1),catchError(this.handleError));
      }

=======
  addCart(cart:any){
    return this.http
      .post(
        this.resturl + '/createCart',
        JSON.stringify(cart),
        this.httpOptions
      )
      .pipe(retry(1),catchError(this.handleError));
  }

  checkout(product_Id:number){
    return this.http
      .get(this.resturl + '/createCart?${product_Id}')}
>>>>>>> master

  handleError(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
