import { ClientSummary } from './../delivery-list/clientSummary';
import { DeliverySummary } from './../deliverySummary';
import { DeliveryService } from './../../delivery.service';
import { Recipient } from './../recipient';
import { Delivery } from './../delivery';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from 'src/app/clients.service';
import { ClientId } from '../clientId';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  clients: Client[] = []
  client: ClientId;
  recipient: Recipient;
  delivery: Delivery;
  clientSummary: ClientSummary
  deliverySummary: DeliverySummary;

  id: number;

  success: boolean = false;
  errors: String[] = [];

  constructor(
    private router: Router,
    private clientService: ClientsService,
    private deliveryService: DeliveryService,
    private activetedRoute: ActivatedRoute

  ) {
    this.delivery = new Delivery();
    this.deliverySummary = new DeliverySummary();
    this.recipient = new Recipient();
    this.client = new ClientId();
    this.clientSummary = new ClientSummary();

    this.delivery.client = this.client;
    this.delivery.recipient = this.recipient;

    let params: Observable<Params> = this.activetedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if (this.id) {
        this.deliveryService
          .getDeliveryById(this.id)
          .subscribe(
            response => {
              console.log(response)
              this.deliverySummary = response
              this.clientSummary = this.deliverySummary.client
              this.client.id = this.clientSummary.id
              this.recipient = this.deliverySummary.recipient
              this.delivery.tax = this.deliverySummary.tax
            }
            , errorResponse => {
              this.deliverySummary = new DeliverySummary()
              var jsonArray = errorResponse.error.title
              this.errors.push(jsonArray);
            })
      }
    })

  }

  ngOnInit(): void {
    this.clientService
      .getClients()
      .subscribe(response => this.clients = response)
  }

  onSubmit() {
    this.deliveryService
      .save(this.delivery)
      .subscribe(response => {
        console.log(response)
        this.success = true;
        this.errors = [];
        this.delivery.client = new ClientId();
        this.delivery.recipient = new Recipient();

      }, errorResponse => {
        console.log(errorResponse)
        this.success = false;
        this.errors = [];

        var jsonArray = errorResponse.error.fields;

        if (!(jsonArray === null || jsonArray === undefined)) {
          jsonArray.forEach((element: { name: any; message: any; }) => {
            this.errors.push(element.name + ': ' + element.message);
          });
        } else {
          var jsonArray = errorResponse.error.title
          this.errors.push(jsonArray);
        }
      }
      )

  }

  concludeDelivery(id: number) {
    this.deliveryService.concludeDelivery(id)
      .subscribe(response => {
        console.log(response)
        this.success = true;
        this.errors = [];
      }, errorResponse => {
        console.log(errorResponse)
        this.success = false;
        this.errors = [];

        var jsonArray = errorResponse.error.fields;

        if (!(jsonArray === null || jsonArray === undefined)) {
          jsonArray.forEach((element: { name: any; message: any; }) => {
            this.errors.push(element.name + ': ' + element.message);
          });
        } else {
          var jsonArray = errorResponse.error.title
          this.errors.push(jsonArray);
        }
      }
      )
  }

  cancelDelivey(id: number) {
    
    this.deliveryService.cancelDelivery(id)
      .subscribe(response => {
        console.log(response)
        this.success = true;
        this.errors = [];

      }, errorResponse => {
        console.log(errorResponse)
        this.success = false;
        this.errors = [];

        var jsonArray = errorResponse.error.fields;

        if (!(jsonArray === null || jsonArray === undefined)) {
          jsonArray.forEach((element: { name: any; message: any; }) => {
            this.errors.push(element.name + ': ' + element.message);
          });
        } else {
          var jsonArray = errorResponse.error.title
          this.errors.push(jsonArray);
        }
      }
      )
  }

  backToList() {
    this.router.navigate(['/delivery/list'])
  }


}
