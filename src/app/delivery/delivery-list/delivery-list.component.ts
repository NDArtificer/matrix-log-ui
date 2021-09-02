import { Router } from '@angular/router';
import { DeliverySummary } from './../deliverySummary';
import { Recipient } from './../recipient';
import { Component, OnInit } from '@angular/core';
import { Delivery } from '../delivery';
import { ClientSummary } from './clientSummary';
import { DeliveryService } from 'src/app/delivery.service';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {


  deliveries: DeliverySummary[] = [];
  client: ClientSummary;
  recipient: Recipient;


  constructor(
    private clientService: ClientsService,
    private deliveryService: DeliveryService,
    private router: Router

  ) { }

  ngOnInit(): void {

    this.deliveryService
      .getDeliveries()
      .subscribe(

        response => {
          console.log(response)
          this.deliveries = response
        });

  }


  newDelivery(){
    this.router.navigate(['/delivery/form'])
  }

}
