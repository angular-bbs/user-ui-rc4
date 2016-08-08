import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ThreadList } from "./list";
import { BasePage } from "../../_common/components/base/page";
import { ThreadApi } from "../../_data/threads/index";
import { Thread } from "../../_common/models/thread";
import { matchById } from "../../_common/operators/match-by-id";

@Component({
  selector: 'thread-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ThreadList]
})
export class ThreadHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ThreadApi) {
    super(activatedRoute);
  }

  items: Observable<Thread[]>;

  reload(params) {
    this.items = this.api.items
      .find(matchById(params.id))
      .toArray();
  }
}
