import { Component } from "@angular/core";
import { QuestionApi } from "../../_data/questions/index";
import { ActivatedRoute } from "@angular/router";
import { Question } from "../../_common/models/question";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Observable";
import { QuestionDetails } from "./details";
import { matchById } from "../../_common/operators/match-by-id";

@Component({
  selector: 'question-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [QuestionDetails]
})
export class QuestionShow extends BasePage {
  constructor(private api: QuestionApi, activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }

  item: Observable<Question>;

  reload(params) {
    this.item = this.api.items
      .find(matchById(params.id));
  }
}
