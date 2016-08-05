import { Component, OnInit, Input } from "@angular/core";
import { Column } from "../../_common/models/column";

@Component({
  selector: 'column-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class ColumnDetails implements OnInit {
  constructor() {
  }

  @Input() item: Column;

  ngOnInit() {
  }

}
