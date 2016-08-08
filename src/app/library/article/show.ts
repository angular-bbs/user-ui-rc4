import { Component } from "@angular/core";
import { Article } from "../../_common/models/article";
import { ActivatedRoute } from "@angular/router";
import { ArticleApi } from "../../_data/articles/index";
import { matchById } from "../../_common/operators/match-by-id";
import { Observable } from "rxjs/Observable";
import { ArticleDetails } from "./details";
import { BasePage } from "../../_common/components/base/page";

@Component({
  selector: 'article-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ArticleDetails]
})
export class ArticleShow extends BasePage {
  constructor(private api: ArticleApi, activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }

  item: Observable<Article>;

  reload(params) {
    this.item = this.api.query().find(matchById(params.id));
  }
}
