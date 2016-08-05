import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NewsApi } from "../../_data/news/index";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Rx";
import { Article } from "../../_common/models/article";
import { MenuItem } from "../../_common/models/menu-item";
import { NewsList } from "./list";

@Component({
  selector: 'news-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [NewsList]
})
export class NewsHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: NewsApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params): void {
    this.items = this.api.items
      .map(newsToMenuItem)
      .toArray();
  }
}

function newsToMenuItem(news: Article): MenuItem {
  return {
    title: news.title,
    icon: news.image,
    description: news.summary,
    url: `/bbs/news/show/${news.id}`
  }
}
