import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CashPaymentService {

  static readonly endpoint1 = 'http://class.onlinemoneypurse.com/API/';
  static readonly endpoint = 'http://localhost:50395/API/';
  
  static readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type':  'application/json'
    })
    };

  constructor(private http: HttpClient) {
  }
  
  getCashPayments(): Observable<any> {
    return this.http.get(CashPaymentService.endpoint + 'CashPayments').pipe(
      map(this.extractData));
  }
  addCashPayment (CashPaymentData): Observable<any> {
    console.log(CashPaymentData);
    return this.http.post<any>(CashPaymentService.endpoint + 'CashPayments', JSON.stringify(CashPaymentData), CashPaymentService.httpOptions).pipe(
      tap((customer) => console.log(`added cash payment w/ id=${CashPaymentData.CashPaymentID}`)),
      catchError(this.handleError<any>('addCashPayment'))
    );
  }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
