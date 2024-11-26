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
          url: '/treatments/list-treatments',
        },
        // {
        //   titulo: 'Uñas',
        //   url: 'productos',
        // },
      ],
    },
    {
      titulo: 'Productos',
      icon: 'nav-icon fas fa-tag',
      submenu: [
        {
          titulo: 'Stock',
          url: '/product/list-product',
        },
        // {
        //   titulo: 'Pestañas',
        //   url: 'productos',
        // },
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
        // {
        //   titulo: 'Crear',
        //   url: '/product/nuevo',
        // },
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
