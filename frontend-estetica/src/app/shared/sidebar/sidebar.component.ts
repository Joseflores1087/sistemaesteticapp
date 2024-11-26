import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menu: any;
  constructor(private sidebar: SidebarService) {
    this.menu = this.sidebar.menu;
  }
  ngOnInit() {
    $('[data-widget="treeview"]').Treeview('init');
  }
}
