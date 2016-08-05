import { Component, Input } from "@angular/core";
import { Article } from "../../_common/models/article";

@Component({
  selector: 'article-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ]
})
export class ArticleList {
  constructor() {
  }

  @Input() items: Article[];
}
