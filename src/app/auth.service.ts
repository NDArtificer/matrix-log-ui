import { TokenInterceptor } from './token.interceptor';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientUser } from './login/clientUser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrlBase + "/client-users"
  tokenUrl: string = environment.apiUrlBase + environment.tokenUrl
  clientId: string = environment.clientId
  clientSecret: string = environment.clientSecret
  jwtHelper: JwtHelperService = new JwtHelperService;

  constructor(
    private http: HttpClient
  ) { }

  getToken() {
    const tokenString = localStorage.getItem('access_token')
    if (tokenString) {
      const token = JSON.parse(tokenString || '{}').access_token
      return token;
    }
    return null;
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    if (token) {
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;
  }


  save(user: ClientUser): Observable<any> {
    return this.http.post<any>(this.apiUrl, user)
  }

  doLogin(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')

    const headers = {
      'Authorization': 'Basic ' + btoa(`${this.clientId}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return this.http.post<any>(this.tokenUrl, params, { headers })
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  getUserAuthenticated() {
    const token = this.getToken();
    if (token) {
      const user = this.jwtHelper.decodeToken(token).user_name;
      return user
    }
    return null;
  }

}
