import { Component } from "@angular/core";
import { AuthorApi } from "../../_data/authors/index";
import { ActivatedRoute } from "@angular/router";
import { Author } from "../../_common/models/author";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Rx";
import { AuthorDetails } from "./details";
import { matchById } from "../../_common/operators/match-by-id";

@Component({
  selector: 'author-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [AuthorDetails]
})
export class AuthorShow extends BasePage {
  constructor(private api: AuthorApi, activatedRoute: ActivatedRoute) {
    super(activatedRoute);
  }

  item: Observable<Author>;

  reload(params) {
    this.item = this.api.items
      .find(matchById(params.id));
  }
}
