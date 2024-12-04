import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { StockComponent } from './stock/stock.component';
import { ReportsProductsComponent } from './reports-products/reports-products.component';

@NgModule({
  declarations: [ListProductsComponent, StockComponent, ReportsProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
