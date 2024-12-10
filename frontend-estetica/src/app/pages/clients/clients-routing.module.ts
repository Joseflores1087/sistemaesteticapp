import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListClientsComponent } from './list-clients/list-clients.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';

const routes: Routes = [
  { path: 'list-client', component: ListClientsComponent },
  { path: 'profile-client', component: ProfileClientComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientsRoutingModule {}
