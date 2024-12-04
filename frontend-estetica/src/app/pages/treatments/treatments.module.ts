import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { TreatmentsRoutingModule } from './treatments-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

import { ListTreatmentsComponent } from './list-treatments/list-treatments.component';
import { DiaryComponent } from './diary/diary.component';
import { ReportsTreatmentsComponent } from './reports-treatments/reports-treatments.component';
import { AddTreatmentsComponent } from './add-treatments/add-treatments.component';

@NgModule({
  declarations: [
    ListTreatmentsComponent,
    DiaryComponent,
    ReportsTreatmentsComponent,
    AddTreatmentsComponent,
  ],
  imports: [
    CommonModule,
    TreatmentsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
})
export class TreatmentsModule {}
