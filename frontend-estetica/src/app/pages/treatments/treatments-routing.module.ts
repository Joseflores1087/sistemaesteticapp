import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListTreatmentsComponent } from './list-treatments/list-treatments.component';
import { DiaryComponent } from './diary/diary.component';
import { ReportsTreatmentsComponent } from './reports-treatments/reports-treatments.component';
import { AddTreatmentsComponent } from './add-treatments/add-treatments.component';

const routes: Routes = [
  { path: 'list-treatments', component: ListTreatmentsComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'report-treatments', component: ReportsTreatmentsComponent },
  { path: 'add-treatments', component: AddTreatmentsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TreatmentsRoutingModule {}
