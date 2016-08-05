import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { Article } from "../../_common/models/article";

const items: Article[] = [
  {
    id: 'AngularDart独立啦',
    image: require('./_images/split.svg'),
    title: 'AngularDart独立啦！',
    content: require('./10.AngularDart独立啦.md'),
    authors: ['Naomi Black'],
    originalUrl: 'http://angularjs.blogspot.hk/2016/07/a-dedicated-team-for-angulardart.html'
  }
];

@Injectable()
export class NewsApi {
  items: Observable<Article> = Observable.from(items);
}
