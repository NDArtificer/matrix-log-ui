import { Observable } from 'rxjs';
import { Delivery } from './delivery/delivery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  apiUrl: string = environment.apiUrlBase +'/deliveries' 

  constructor(
    private http: HttpClient
  ) { }

  save(delivery: Delivery): Observable<Delivery>{
    return this.http.post<Delivery>(this.apiUrl, delivery);
  }
}
