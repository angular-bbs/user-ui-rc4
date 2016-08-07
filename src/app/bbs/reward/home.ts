import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { QuestionList } from "../question/list";
import { QuestionApi } from "../../_data/questions/index";
import { Question } from "../../_common/models/question";

@Component({
  selector: 'bbs-reward',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [QuestionList]
})
export class BbsReward extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: QuestionApi) {
    super(activatedRoute);
  }

  items: Observable<Question[]>;

  reload(params): void {
    this.items = this.api.items
      .filter(matchByLabel('reward'))
      .toArray();
  }
}

function matchByLabel(label: string): (item)=>boolean {
  return (item)=> {
    return !label || item.labels.indexOf(label) !== -1
  }
}
