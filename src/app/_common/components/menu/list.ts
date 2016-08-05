import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from "../../models/menu-item";

@Component({
  selector: 'menu-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class MenuList implements OnInit {
  constructor() {
  }

  @Input() items: MenuItem[];

  ngOnInit() {
  }

}
