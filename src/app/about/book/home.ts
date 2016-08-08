import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BookApi } from "../../_data/books/index";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Observable";
import { Book } from "../../_common/models/book";
import { MenuItem } from "../../_common/models/menu-item";
import { BookList } from "./list";

@Component({
  selector: 'book-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [BookList]
})
export class BookHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: BookApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params): void {
    this.items = this.api.query()
      .map(bookToMenuItem)
      .toArray();
  }
}

function bookToMenuItem(book: Book): MenuItem {
  return {
    title: book.title,
    icon: book.picture,
    description: `作者：${book.authors.join(' ')}`,
    url: `/about/book/show/${book.id}`
  }
}
