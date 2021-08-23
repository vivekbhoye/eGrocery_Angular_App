import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry} from 'rxjs/operators';
import { Products } from 'src/Products';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  private resturl: string = 'http://localhost:8080/eGrocery_Spring_App/products';


  constructor(private http: HttpClient) {}

  httpOptions = {
    headers:new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addProduct(product: any ): Observable<Products>{
    return this.http
      .post<Products>(
        this.resturl + '/addProduct',
        JSON.stringify(product),
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


