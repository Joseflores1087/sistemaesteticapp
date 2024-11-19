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
          titulo: 'Depilacion',
          url: 'productos',
        },
        {
          titulo: 'Uñas',
          url: 'productos',
        },
      ],
    },
    {
      titulo: 'Productos',
      icon: 'nav-icon fas fa-tag',
      submenu: [
        {
          titulo: 'Pintura Uñas',
          url: 'productos',
        },
        {
          titulo: 'Pestañas',
          url: 'productos',
        },
      ],
    },
    {
      titulo: 'Usuarios',
      icon: 'nav-icon fas fa-user',
      submenu: [
        {
          titulo: 'Listar',
          url: '/clientes/listar',
        },
        {
          titulo: 'Crear',
          url: '/clientes/nuevo',
        },
      ],
    },
    {
      titulo: 'Clientes',
      icon: 'nav-icon fas fa-users',
      url: '/clientes/listar',
    },
    {
      titulo: 'Reportes',
      icon: 'nav-icon fas fa-print',
      url: '/clientes/listar',
    },
    {
      titulo: 'Turnos',
      icon: 'nav-icon fas fa-calendar',
      url: '/clientes/listar',
    },
  ];
  constructor() {}
}
