import { Component, OnInit, Input } from "@angular/core";
import { Article } from "../../_common/models/article";

@Component({
  selector: 'news-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class NewsDetails implements OnInit {

  @Input() item: Article;

  constructor() {
  }

  ngOnInit() {
  }

}
