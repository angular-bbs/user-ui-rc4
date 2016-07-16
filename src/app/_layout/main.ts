import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'layout-main',
  template: require('./main.html'),
  styles: [
    require('./main.scss')
  ]
})
export class LayoutMain implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
