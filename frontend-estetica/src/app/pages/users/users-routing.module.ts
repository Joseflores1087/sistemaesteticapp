import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ReportsUsersComponent } from './reports-users/reports-users.component';

const routes: Routes = [
  { path: 'list-users', component: ListUsersComponent },
  { path: 'add-users', component: AddUserComponent },
  { path: 'report-users', component: ReportsUsersComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
