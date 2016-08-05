import { Component, OnInit, Input } from '@angular/core';
import { Question } from "../../_common/models/question";

@Component({
  selector: 'question-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class QuestionDetails implements OnInit {
  @Input() item: Question;

  constructor() {
  }

  ngOnInit() {
  }
}
