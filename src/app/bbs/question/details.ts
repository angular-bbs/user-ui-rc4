import { Component, OnInit, Input } from '@angular/core';
import { Question } from "../../_common/models/question";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'question-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class QuestionDetails implements OnInit {
  @Input() item: Question;

  constructor() {
  }

  ngOnInit() {
  }
}
