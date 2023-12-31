
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const user: User = JSON.parse(localStorage.getItem('user'));
    let position = request.url.indexOf('newsdata');
    if(user && position === -1){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${user.token}`
        }
      });
    }
    return next.handle(request);
  }
}
