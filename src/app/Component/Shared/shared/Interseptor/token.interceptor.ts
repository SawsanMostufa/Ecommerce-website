import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../Services/account.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor( private accountService:AccountService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const accessToken = this.accountService.gettoken();

    if (accessToken) {
      
      request = request.clone({
         headers:request.headers.set('Authorization',`Bearer ${accessToken}`)
        //  setHeaders: {'Authorization',`Bearer ${accessToken}`}

      });
   }
    
    return next.handle(request);

    
    
  }
}
