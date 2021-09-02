import { Observable } from 'rxjs';
import { Client } from './../client';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/clients.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent implements OnInit {

  client: Client;
  success: boolean = false;
  errors: String[] = [];
  id: number;

  constructor(
    private service: ClientsService,
    private router: Router,
    private activetedRoute: ActivatedRoute) {

    this.client = new Client();
    let params: Observable<Params> = this.activetedRoute.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];

      if (this.id) {
        this.service
          .getClientById(this.id)
          .subscribe(
            response => { this.client = response }
            , errorResponse => {
              this.client = new Client()
              var jsonArray = errorResponse.error.title
              this.errors.push(jsonArray);
            })
      }
    })



  }

  ngOnInit(): void {

  }

  submit() {
    if (this.id) {
      this.service
        .update(this.client, this.id)
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


    } else {

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
  }

  backToList() {
    this.router.navigate(['/clients/list'])
  }

}
