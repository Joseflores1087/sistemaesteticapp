import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';

import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./clients/clients.module').then((x) => x.ClientsModule),
      },
    ],
  },
  // {
  //   path: '',
  //   component: PagesComponent,
  //   children: [
  //     { path: 'productos', component: ProductosComponent },
  //     {
  //       path: 'clientes',
  //       loadChildren: () =>
  //         import('./clients/clients.module').then((x) => x.ClientsModule),
  //     },
  //   ],
  // },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
