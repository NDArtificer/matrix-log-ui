import { DeliveryService } from './../../delivery.service';
import { Recipient } from './../recipient';
import { Delivery } from './../delivery';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from 'src/app/clients.service';
import { ClientId } from '../clientId';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.css']
})
export class DeliveryFormComponent implements OnInit {

  clients: Client[] = []
  client: ClientId;
  delivery: Delivery
  recipient: Recipient

  success: boolean = false;
  errors: String[] = [];

  constructor(
    private clientService: ClientsService,
    private deliveryService: DeliveryService

  ) { 
    this.delivery = new Delivery();
    this.recipient = new Recipient();
    this.client = new ClientId();
    
    this.delivery.client = this.client;
    this.delivery.recipient = this.recipient;
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

}
