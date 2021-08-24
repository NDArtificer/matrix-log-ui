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

  constructor(
    private clientService: ClientsService

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

  onSubmit(){
    console.log(this.delivery)

  }

}
