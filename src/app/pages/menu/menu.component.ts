import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  activeItem: MenuItem;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: [`/home`]},
      {label: 'Browse Books', icon: 'pi pi-fw pi-search', routerLink: [`/books`]}
    ];
    this.activeItem = this.items[0];
  }

  // tslint:disable-next-line:typedef
  activateMenu(tab: any) {
    this.activeItem = tab.activeItem;
  }
}
