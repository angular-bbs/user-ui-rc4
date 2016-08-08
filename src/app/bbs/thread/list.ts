import { Component, OnInit, Input } from '@angular/core';
import { Thread } from "../../_common/models/thread";

@Component({
  selector: 'thread-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class ThreadList implements OnInit {
  constructor() {
  }

  @Input() items: Thread[];

  ngOnInit() {
  }

}
