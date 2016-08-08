import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ThreadList } from "../thread/list";
import { ThreadApi } from "../../_data/threads/index";
import { Thread } from "../../_common/models/thread";

@Component({
  selector: 'bbs-mine',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ThreadList]
})
export class BbsMine extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ThreadApi) {
    super(activatedRoute);
  }

  items: Observable<Thread[]>;

  reload(params): void {
    this.items = this.api.items
      .filter(matchByAuthor('雪狼'))
      .toArray();
  }
}

function matchByAuthor(author: string): (item)=>boolean {
  return (item)=> {
    return !author || item.authors.indexOf(author) !== -1
  }
}
