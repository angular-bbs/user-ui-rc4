import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "../../_common/models/menu-item";
import { MenuList } from "../../_common/components/menu/list";

@Component({
  selector: 'news-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ],
  directives: [MenuList]
})
export class NewsList implements OnInit {
  constructor() {
  }

  @Input() items: MenuItem[];

  ngOnInit() {
  }

}
