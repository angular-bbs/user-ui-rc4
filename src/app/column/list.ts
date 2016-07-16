import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'column-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class ColumnList implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
