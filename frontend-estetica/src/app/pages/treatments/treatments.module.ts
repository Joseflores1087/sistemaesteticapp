import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTreatmentsComponent } from './list-treatments/list-treatments.component';
import { TreatmentsRoutingModule } from './treatments-routing.module';

@NgModule({
  declarations: [ListTreatmentsComponent],
  imports: [CommonModule, TreatmentsRoutingModule],
})
export class TreatmentsModule {}
