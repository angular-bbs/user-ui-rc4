import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { NewsApi } from "../../_data/news/index";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { Article } from "../../_common/models/article";
import { matchById } from "../../_common/operators/match-by-id";
import { ArticleDetails } from "../article/details";

@Component({
  selector: 'news-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ArticleDetails]
})
export class NewsShow extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: NewsApi) {
    super(activatedRoute);
  }

  item: Observable<Article>;

  reload(params): void {
    this.item = this.api.items
      .find(matchById(params.id));
  }
}
