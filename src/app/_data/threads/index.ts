import { Injectable } from "@angular/core";
import { Thread } from "../../_common/models/thread";
import { Observable } from "rxjs/Observable";
const items: Thread[] = [
  {
    id: '1',
    title: '欢迎您！陌生的旅者',
    picture: require('./_images/wizard.svg'),
    content: require('./10.欢迎您！陌生的旅者.md'),
    authors: ['雪狼', '叶志敏'],
    labels: ['hot', 'latest'],
  },
  {
    id: '2',
    title: '悬赏！哥德巴赫猜想',
    content: require('./20.悬赏！哥德巴赫猜想.md'),
    authors: ['雪狼'],
    labels: ['latest', 'reward'],
  },
  {
    id: '3',
    title: 'Angular 2路由问题',
    content: require('./30.Angular 2路由问题.md'),
    authors: ['雪狼'],
    labels: [],
  },
];
@Injectable()
export class ThreadApi {
  items: Observable<Thread> = Observable.from(items);
}
