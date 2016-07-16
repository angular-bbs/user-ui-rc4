import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'book-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class BookList implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
