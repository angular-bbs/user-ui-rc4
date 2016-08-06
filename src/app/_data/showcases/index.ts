import { Injectable } from "@angular/core";
import { Showcase } from "../../_common/models/showcase";
import { Observable } from "rxjs/Observable";
const items: Showcase[] = [
  {
    id: 'iFish',
    title: 'iFish',
    author: 'ThoughtWorks',
    customer: '智渔科技',
    description: require('./ifish.md'),
    picture: require('./_images/ifish.svg'),
  }
];
@Injectable()
export class ShowcaseApi {
  items: Observable<Showcase> = Observable.from(items);
}
