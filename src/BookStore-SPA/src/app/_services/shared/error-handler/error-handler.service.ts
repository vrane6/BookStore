import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements HttpInterceptor {

  constructor(private route: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = this.handleError(error);
          return throwError(() => new Error(errorMessage));
        })
      )
  }

  private handleError = (error: HttpErrorResponse): string | any => {
    if (error.status === 404) {
      return this.handleNotFound(error);
    }
    else if (error.status === 400) {
      return this.handleBadRequest(error);
    }
    else if (error.status === 401) {
      return this.handleUnauthorized(error);
    }
    else if (error.status === 403) {
      return this.handleForbidden(error);
    }
  }
  private handleNotFound = (error: HttpErrorResponse): string => {
    this.route.navigate(['/404']);
    return error.message;
  }


  private handleBadRequest = (error: HttpErrorResponse): string => {
    if (this.route.url === '/authentication/register') {
      let message = '';
      const values = Object.values(error.error.errors);
      values.map((m: string | any) => {
        message += m + '<br>';
      })
      return message.slice(0, -4);
    }
    else {
      return error.error ? error.error : error.message;
    }
  }

  private handleUnauthorized = (error: HttpErrorResponse) => {
    if (this.route.url === '/authentication/login') {
      return 'Authentication failed. Wrong Username or Password';
    }
    else {
      this.route.navigate(['/authentication/login'], { queryParams: { returnUrl: this.route.url } });
      return error.message;
    }
  }

  private handleForbidden = (error: HttpErrorResponse) => {
    this.route.navigate(['forbidden'], { queryParams: { returnUrl: this.route.url } });
    return "Forbidden";
  }

}
