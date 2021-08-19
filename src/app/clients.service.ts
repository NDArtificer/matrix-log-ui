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

  getClient(): Client {
    let client: Client = new Client();
    client.name = 'Denilson Nacimento'
    client.email = 'denilson@nascimento.com.br'
    client.phone = "11 94830-0810"
    return client;
  }

  save(client: Client) : Observable<Client> {
      return this.http.post<Client>('http://localhost:8080/clients', client)
  }

}