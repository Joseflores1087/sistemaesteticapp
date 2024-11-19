import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListShiftsComponent } from './list-shifts/list-shifts.component';
import { ReportRoutingModule } from '../reports/report-routing.module';
import { ShiftsRoutingModule } from './shifts-routing.module';

@NgModule({
  declarations: [ListShiftsComponent],
  imports: [CommonModule, ShiftsRoutingModule],
})
export class ShiftsModule {}
