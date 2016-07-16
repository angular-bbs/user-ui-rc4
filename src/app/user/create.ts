import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'user-create',
  template: require('./create.html'),
  styles: [
    require('./create.scss')
  ]
})
export class UserCreate implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
