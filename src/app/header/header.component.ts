// header.component.ts

import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Services", "/services"),
    new Menu("Gallery", "/gallery"),
    new Menu("Contact", "/contact")
  ];
}
