import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'thread-create',
  template: require('./create.html'),
  styles: [
    require('./create.scss')
  ]
})
export class ThreadCreate implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
