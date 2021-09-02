import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DeliveryService } from 'src/app/delivery.service';
import { Events } from '../event-list/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent implements OnInit {

  id: number;
  success: boolean;
  errors: String[] = [];
  event: Events;
  description: string;

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private activetedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let params: Observable<Params> = this.activetedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.event = new Events();
        this.event.description = this.description
        this.deliveryService.postDeliveryEvents(this.id, this.event)
        .subscribe(response => {
          console.log(response)
          this.success = true
          this.description = ''
        }, errorResponse => {
          console.log(errorResponse)
          this.success = false;
          this.errors = [];
  
          var jsonArray = errorResponse.error.fields;
  
          if (!(jsonArray === null || jsonArray === undefined)) {
            jsonArray.forEach((element: { name: any; message: any; }) => {
              this.errors.push(element.name +' : '+ element.message);
            });
          } else {
            var jsonArray = errorResponse.error.title
            this.errors.push(jsonArray);
          }
        })
      }
    })
  }

  backToList() {
    let params: Observable<Params> = this.activetedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.router.navigate([`/delivery/form/${this.id}/events`])
      }
    })
  }

}
