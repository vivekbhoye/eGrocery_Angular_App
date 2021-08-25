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

  addcart(cart:any):Observable<Cart>{
    return this.http
      .post<Cart>(
        this.resturl + '/createCart',
        JSON.stringify(cart),
        this.httpOptions
        )
        .pipe(retry(1),catchError(this.handleError));
      }


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
