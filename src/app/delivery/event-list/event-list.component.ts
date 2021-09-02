import { Observable } from 'rxjs';
import { DeliveryService } from 'src/app/delivery.service';
import { Component, OnInit } from '@angular/core';
import { Events } from './event';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Events[] = [];
  id: number;

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    let params: Observable<Params> = this.activetedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.deliveryService
          .getDeliveryEvents(this.id)
          .subscribe(

            response => {
              console.log(response)
              this.events = response
            });
      }

    })
}

  newEvent() {
    let params: Observable<Params> = this.activetedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.router.navigate([`/delivery/form/${this.id}/events/form`])
      }
    })

  }

  goBack() {
    this.router.navigate(['/delivery/list']);
  }

}
