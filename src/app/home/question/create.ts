import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'question-create',
  template: require('./create.html'),
  styles: [
    require('./create.scss')
  ]
})
export class QuestionCreate implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
