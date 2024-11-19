import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListShiftsComponent } from './list-shifts/list-shifts.component';

const routes: Routes = [{ path: 'list', component: ListShiftsComponent }];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftsRoutingModule {}
