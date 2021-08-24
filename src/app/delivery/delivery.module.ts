import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DeliveryFormComponent,
    DeliveryListComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    DeliveryFormComponent,
    DeliveryListComponent
  ]
})
export class DeliveryModule { }
