import { Client } from './clients/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>('http://localhost:8080/clients')
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/clients', client)
  }

}
