import { Component } from "@angular/core";
import { ArticleList } from "./list";
import { BasePage } from "../../_common/components/base/page";
import { ActivatedRoute } from "@angular/router";
import { ArticleApi } from "../../_data/articles/index";
import { Article } from "../../_common/models/article";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'article-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ArticleList]
})
export class ArticleHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ArticleApi) {
    super(activatedRoute);
  }

  items: Observable<Article[]>;

  reload(params): void {
    this.items = this.api.query()
      .filter(matchByAuthor(params.author))
      .filter(matchByTag(params.tag))
      .filter(matchByColumn(params.column))
      .toArray();
  }
}

function matchByAuthor(author: string): (item)=>boolean {
  return (item)=> {
    return !author || item.authors.indexOf(author) !== -1
  }
}

function matchByTag(tag: string): (item)=>boolean {
  return (item)=> {
    return !tag || item.tags && item.tags.indexOf(tag) !== -1
  }
}

function matchByColumn(column: string): (item)=>boolean {
  return (item)=> {
    return !column || item.column === column
  }
}
