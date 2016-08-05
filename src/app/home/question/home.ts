import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { QuestionList } from "./list";
import { BasePage } from "../../_common/components/base/page";
import { QuestionApi } from "../../_data/questions/index";
import { Question } from "../../_common/models/question";
import { matchById } from "../../_common/operators/match-by-id";

@Component({
  selector: 'question-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [QuestionList]
})
export class QuestionHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: QuestionApi) {
    super(activatedRoute);
  }

  items: Observable<Question[]>;

  reload(params) {
    this.items = this.api.items
      .find(matchById(params.id))
      .toArray();
  }
}
