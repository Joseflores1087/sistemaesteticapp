import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';

import { StockComponent } from './stock/stock.component';
import { ReportsProductsComponent } from './reports-products/reports-products.component';

@NgModule({
  declarations: [
    ListProductsComponent,
    StockComponent,
    ReportsProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
  ],
})
export class ProductsModule {}
