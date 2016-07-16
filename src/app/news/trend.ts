import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'news-trend',
  template: require('./trend.html'),
  styles: [
    require('./trend.scss')
  ]
})
export class NewsTrend implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
