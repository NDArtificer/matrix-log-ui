import { Observable } from 'rxjs';
import { Delivery } from './delivery/delivery';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeliverySummary } from './delivery/deliverySummary';
import { Events } from './delivery/event-list/event';


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  apiUrl: string = environment.apiUrlBase + '/deliveries'

  constructor(
    private http: HttpClient
  ) { }

  cancelDelivery(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/cancel`, '');
  }
  concludeDelivery(id: number): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}/conclude`, '');
  }

  getDeliveryEvents(id: number): Observable<Events[]> {
    return this.http.get<Events[]>(`${this.apiUrl}/${id}/events`)
  }

  postDeliveryEvents(id: number, event: Events): Observable<Events> {
    return this.http.post<Events>(`${this.apiUrl}/${id}/events`, event)
  }


  getDeliveryById(id: number): Observable<DeliverySummary> {
    return this.http.get<DeliverySummary>(`${this.apiUrl}/${id}`);
  }

  getDeliveries(): Observable<DeliverySummary[]> {
    return this.http.get<DeliverySummary[]>(this.apiUrl);
  }

  save(delivery: Delivery): Observable<Delivery> {
    return this.http.post<Delivery>(this.apiUrl, delivery);
  }


}
