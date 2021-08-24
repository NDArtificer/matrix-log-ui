import { Client } from './clients/client';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  apiUrl: string = environment.apiUrlBase +'/clients';

  constructor(private http: HttpClient) {
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl)
  }

  getClientById(id: number){
    return this.http.get<any>(`${this.apiUrl}/${id}`)
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiUrl}` , client)
  }

  update(client: Client, id: number): Observable<Client> {
    return this.http.put<Client>(`${this.apiUrl}/${id}`, client)
  }

  delete(client: Client): Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${client.id}`);
  } 

}
