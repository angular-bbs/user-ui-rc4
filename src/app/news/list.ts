import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'news-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class NewsList implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
