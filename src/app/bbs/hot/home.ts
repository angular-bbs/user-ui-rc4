import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ThreadList } from "../thread/list";
import { ThreadApi } from "../../_data/threads/index";
import { Thread } from "../../_common/models/thread";

@Component({
  selector: 'bbs-hot',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ThreadList]
})
export class BbsHot extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ThreadApi) {
    super(activatedRoute);
  }

  items: Observable<Thread[]>;

  reload(params): void {
    this.items = this.api.items
      .filter(matchByLabel('hot'))
      .toArray();
  }
}

function matchByLabel(label: string): (item)=>boolean {
  return (item)=> {
    return !label || item.labels.indexOf(label) !== -1
  }
}
