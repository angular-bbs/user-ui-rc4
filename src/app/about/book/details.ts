import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../_common/models/book";

@Component({
  selector: 'book-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class BookDetails implements OnInit {

  @Input() item: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
