import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { NoPagesComponent } from './pages/no-pages/no-pages.component';

const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', component: NoPagesComponent },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.module').then((x) => x.PagesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
