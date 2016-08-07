import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { ResourceApi } from "../../_data/resources/index";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Article } from "../../_common/models/article";
import { matchById } from "../../_common/operators/match-by-id";
import { ArticleDetails } from "../article/details";

@Component({
  selector: 'resource-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ArticleDetails]
})
export class ResourceShow extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ResourceApi) {
    super(activatedRoute);
  }

  item: Observable<Article>;

  reload(params): void {
    this.item = this.api.items
      .find(matchById(params.id));
  }
}
