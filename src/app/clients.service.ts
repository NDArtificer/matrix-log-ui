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

  getClientById(id: number){
    return this.http.get<any>(`http://localhost:8080/clients/${id}`)
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>('http://localhost:8080/clients', client)
  }

  update(client: Client, id: number): Observable<Client> {
    return this.http.put<Client>(`http://localhost:8080/clients/${id}`, client)
  }

  delete(client: Client): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/clients/${client.id}`);
  } 

}
