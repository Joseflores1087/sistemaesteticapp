import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Tratamientos',
      icon: 'nav-icon fas fa-th',
      submenu: [
        {
          titulo: 'listado',
          url: 'treatments/list-treatments',
        },
        {
          titulo: 'Reportes',
          url: 'treatments/report-treatments',
        },
        {
          titulo: 'Agenda',
          url: 'treatments/diary',
        },
      ],
    },
    {
      titulo: 'Productos',
      icon: 'nav-icon fas fa-tag',
      submenu: [
        {
          titulo: 'Stock',
          url: 'product/list-product',
        },
        {
          titulo: 'Categoría',
          url: 'categories/list',
        },
        {
          titulo: 'Reporte de productos',
          url: 'product/report-products',
        },
      ],
    },
    {
      titulo: 'Usuarios',
      icon: 'nav-icon fas fa-user',
      submenu: [
        {
          titulo: 'Listar',
          url: 'users/list-users',
        },
        {
          titulo: 'Crear',
          url: 'users/add-users',
        },
        {
          titulo: 'Reporte de usuarios',
          url: 'users/report-users',
        },
      ],
    },
    {
      titulo: 'Clientes',
      icon: 'nav-icon fas fa-users',
      url: 'clientes/list-client',
    },
    {
      titulo: 'Reportes',
      icon: 'nav-icon fas fa-print',
      url: 'reports/reports',
    },
    {
      titulo: 'Turnos',
      icon: 'nav-icon fas fa-calendar',
      url: 'shifts/list',
    },
  ];
  constructor() {}
}
