import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientsFormComponent } from './clients-form/clients-form.component';
import { ClientsListComponent } from './clients-list/clients-list.component';

const routes: Routes = [
  {path: 'clients-form', component: ClientsFormComponent},
  {path: 'clients-list', component: ClientsListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
