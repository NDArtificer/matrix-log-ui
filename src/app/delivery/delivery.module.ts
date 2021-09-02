import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { RouterModule } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';

@NgModule({
  declarations: [
    DeliveryFormComponent,
    DeliveryListComponent,
    EventListComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DeliveryFormComponent,
    DeliveryListComponent,
    EventListComponent
  ]
})
export class DeliveryModule { }
