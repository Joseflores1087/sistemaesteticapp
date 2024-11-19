import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

import { ProductosComponent } from './productos/productos.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NoPagesComponent } from './no-pages/no-pages.component';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  declarations: [PagesComponent, ProductosComponent, HomeComponent],
  exports: [ProductosComponent, HomeComponent, PagesComponent],
  imports: [CommonModule, SharedModule, RouterModule, PagesRoutingModule],
})
export class PagesModule {}
