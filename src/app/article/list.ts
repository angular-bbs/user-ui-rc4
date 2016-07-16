import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'article-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class ArticleList implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
