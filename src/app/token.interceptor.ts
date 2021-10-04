import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const url = request.url;
    const tokenString = localStorage.getItem('access_token');

    if (tokenString  && !url.endsWith('/oauth/token')) {

      const token = JSON.parse(tokenString || '{}')

      request = request.clone(
        {
          setHeaders: {
            'Authorization': 'Bearer ' + token.access_token

          }
        }
      )
    }


    return next.handle(request);
  }
}
