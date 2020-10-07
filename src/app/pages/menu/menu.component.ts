import {Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  activeItem: MenuItem;

  @ViewChild('menuItems', {static: true}) menu: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: [`/home`]},
      {label: 'Browse Books', icon: 'pi pi-fw pi-search', routerLink: [`/books`]}
    ];
  }

  activateMenu() {
    const key = 'activeItem';
    // @ts-ignore TODO: the array is accessed with a string key
    this.activeItem = this.menu[key];
  }
}
