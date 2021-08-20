import { ClientsService } from './../../clients.service';
import { Client } from './../client';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clients: Client[] = [];

  constructor(private service: ClientsService,
    private router: Router) {

    }

  ngOnInit(): void {

    this.service
      .getClients()
      .subscribe(response => this.clients = response);
  }

  newRegister(){
    this.router.navigate(['/clients-form'])
  }

}
