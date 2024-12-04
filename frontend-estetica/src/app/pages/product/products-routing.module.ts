import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { StockComponent } from './stock/stock.component';
import { ReportsProductsComponent } from './reports-products/reports-products.component';

const routes: Routes = [
  { path: 'list-product', component: ListProductsComponent },
  { path: 'stock-product', component: StockComponent },
  { path: 'report-products', component: ReportsProductsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
