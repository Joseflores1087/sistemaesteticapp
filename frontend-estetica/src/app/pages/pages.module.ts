import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { NoPagesComponent } from './no-pages/no-pages.component';

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  exports: [HomeComponent, PagesComponent],
  imports: [CommonModule, SharedModule, RouterModule, PagesRoutingModule],
})
export class PagesModule {}
