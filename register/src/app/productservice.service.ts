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

  getProducts(): Observable<Products>{
    return this.http
      .get<Products>(this.resturl + '/allProducts')
      .pipe(retry(1), catchError(this.handleError));
  }

  getAProduct(product_Id:any): Observable<Products>{
    return this.http
      .get<Products>(this.resturl + '/search/' + product_Id)
      .pipe(retry(1),catchError(this.handleError));
  }

  updateProduct(product:any): Observable<Products>{
    return this.http
      .put<Products>(
        this.resturl + '/updateProduct',
        JSON.stringify(product),
        this.httpOptions
        )
      .pipe(retry(1),catchError(this.handleError));
  }

  deleteProduct(product_Id:any):Observable<Products>{
    return this.http
      .delete<Products>(this.resturl + '/deleteProduct/' + product_Id,
      this.httpOptions)
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


