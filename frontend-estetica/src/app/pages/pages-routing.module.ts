import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: 'pages',
    component: PagesComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'clientes',
        loadChildren: () =>
          import('./clients/clients.module').then((x) => x.ClientsModule),
      },
      {
        path: 'reports',
        loadChildren: () =>
          import('./reports/report.module').then((x) => x.ReportModule),
      },
      {
        path: 'shifts',
        loadChildren: () =>
          import('./shift/shifts.module').then((x) => x.ShiftsModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/products.module').then((x) => x.ProductsModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./users/users.module').then((x) => x.UsersModule),
      },
      {
        path: 'treatments',
        loadChildren: () =>
          import('./treatments/treatments.module').then(
            (x) => x.TreatmentsModule
          ),
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
