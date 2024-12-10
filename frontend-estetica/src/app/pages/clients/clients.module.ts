import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

import { ListClientsComponent } from './list-clients/list-clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ProfileClientComponent } from './profile-client/profile-client.component';

@NgModule({
  declarations: [
    ListClientsComponent,
    AddClientComponent,
    ProfileClientComponent,
  ],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatTableModule,
  ],
})
export class ClientsModule {}
