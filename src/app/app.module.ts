import { ClientsModule } from './clients/clients.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClientsService } from './clients.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { DeliveryModule } from './delivery/delivery.module';
import { DeliveryService } from './delivery.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    DeliveryModule
  ],
  providers: [
    ClientsService,
    DeliveryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
