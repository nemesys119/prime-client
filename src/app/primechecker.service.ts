import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrimeResponse} from "./model/prime-response";
import {PrimeRequest} from "./model/prime-request";
import {catchError, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrimecheckerService {

  constructor(private http: HttpClient) {
  }

  executePrimeCheckerService(possiblePrime: number) {
    const request = new PrimeRequest(possiblePrime);

    return this.http.post<PrimeResponse>('http://localhost:8080/prime', request).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    }
    else if (error.status == 400) {
      // server side validation error
      errorMessage = `${error.error.possiblePrime}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
