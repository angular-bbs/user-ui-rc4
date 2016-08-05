import { Component, OnInit, Input } from '@angular/core';
import { Question } from "../../_common/models/question";

@Component({
  selector: 'question-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class QuestionList implements OnInit {
  constructor() {
  }

  @Input() items: Question[];

  ngOnInit() {
  }

}
