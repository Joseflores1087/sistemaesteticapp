import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ReportsUsersComponent } from './reports-users/reports-users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [ListUsersComponent, ReportsUsersComponent, AddUserComponent],
  imports: [CommonModule, UsersRoutingModule],
})
export class UsersModule {}
