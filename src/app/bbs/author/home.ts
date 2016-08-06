import { Component } from "@angular/core";
import { AuthorApi } from "../../_data/authors/index";
import { ActivatedRoute } from "@angular/router";
import { Author } from "../../_common/models/author";
import { Observable } from "rxjs/Observable";
import { BasePage } from "../../_common/components/base/page";
import { matchById } from "../../_common/operators/match-by-id";
import { AuthorList } from "./list";
import { MenuItem } from "../../_common/models/menu-item";

@Component({
  selector: 'author-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [AuthorList]
})
export class AuthorHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: AuthorApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params):void {
    this.items = this.api.items
      .find(matchById(params.id))
      .map(authorToMenuItem)
      .toArray();
  }
}

function authorToMenuItem(author: Author): MenuItem {
  return {
    icon: author.avatar,
    description: author.bio,
    title: author.name,
    url: `./show/${author.id}`
  }
}
