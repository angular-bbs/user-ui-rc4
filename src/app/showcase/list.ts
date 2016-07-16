import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'showcase-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class ShowcaseList implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
