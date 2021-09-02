import { EventListComponent } from './event-list/event-list.component';
import { LayoutComponent } from './../layout/layout.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import { DeliveryFormComponent } from './delivery-form/delivery-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventFormComponent } from './event-form/event-form.component';

const routes: Routes = [

  {
    path: 'delivery', component: LayoutComponent, children: [

      { path: 'form', component: DeliveryFormComponent },
      { path: 'form/:id', component: DeliveryFormComponent },
      { path: 'form/:id/events', component: EventListComponent },
      { path: 'form/:id/events/form', component: EventFormComponent },
      { path: 'list', component: DeliveryListComponent },
      { path: '', redirectTo: '/delivery/list', pathMatch: 'full' }

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryRoutingModule { }
