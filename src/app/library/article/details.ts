import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../_common/models/article";
import { HtmlViewer } from "../../_common/components/html/viewer";

@Component({
  selector: 'article-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer]
})
export class ArticleDetails implements OnInit {
  @Input() item: Article;

  constructor() {
  }

  ngOnInit() {
  }

}
