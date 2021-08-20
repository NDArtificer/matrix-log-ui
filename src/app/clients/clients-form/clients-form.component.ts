import { Client } from './../client';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[] = [];

  constructor(private service: ClientsService,
    private router: Router) {
    this.client = new Client();
  }

  ngOnInit(): void {

  }

  submit() {
    this.service.save(this.client)
      .subscribe(response => {
        console.log(response)
        this.success = true;
        this.errors = [];
        this.client = response;
      }, errorResponse => {

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

  backToList(){
    this.router.navigate(['/clients-list'])
  }

}
