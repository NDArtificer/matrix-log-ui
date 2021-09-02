import { FormsModule } from '@angular/forms';
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
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { EventFormComponent } from './delivery/event-form/event-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent,
    EventFormComponent
  ],
  imports: [
    FormsModule,
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
