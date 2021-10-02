import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ClientUser } from './login/clientUser';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string = environment.apiUrlBase + "/client-users"
  tokenUrl: string = environment.apiUrlBase + environment.tokenUrl
  clientId: string = environment.clientId
  clientSecret: string = environment.clientSecret

  constructor(
    private http: HttpClient
  ) { }

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



}
