import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { BookApi } from "../../_data/books/index";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Book } from "../../_common/models/book";
import { matchById } from "../../_common/operators/match-by-id";
import { BookDetails } from "../book/details";

@Component({
  selector: 'book-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [BookDetails]
})
export class BookShow extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: BookApi) {
    super(activatedRoute);
  }

  item: Observable<Book>;

  reload(params): void {
    this.item = this.api.query()
      .find(matchById(params.id));
  }
}
