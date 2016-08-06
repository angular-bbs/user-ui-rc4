import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Partner } from "../../_common/models/partner";

const items: Partner[] = [
  {
    id: 'angular-io',
    avatar: require('./_images/angular.svg'),
    name: 'Angular官网',
    description: 'Angular 2官方网站，最新、最权威资料',
    homepage: 'https://angular.io'
  }
];

@Injectable()
export class PartnerApi {
  items: Observable<Partner> = Observable.from(items);
}
