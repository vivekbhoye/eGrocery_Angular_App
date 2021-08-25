import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Payment } from 'src/payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentserviceService {

  

  private resturl: string = 'http://localhost:8080/eGrocery_Spring_App/payment';


  constructor(private http: HttpClient) {}

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  savePayment(payment: any ): Observable<Payment>{
    return this.http
      .post<Payment>(
        this.resturl + '/savePayment',
        JSON.stringify(payment),
        this.httpOptions
        )
        .pipe(retry(1), catchError(this.handleError));
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
