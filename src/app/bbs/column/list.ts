import { Component, OnInit, Input } from '@angular/core';
import { Column } from "../../_common/models/column";
import { MenuList } from "../../_common/components/menu/list";

@Component({
  selector: 'column-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ],
  directives: [MenuList]
})
export class ColumnList implements OnInit {
  constructor() {
  }

  @Input() items: Column[];

  ngOnInit() {
  }
}
