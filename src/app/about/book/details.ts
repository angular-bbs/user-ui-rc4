import { Component, OnInit, Input } from "@angular/core";
import { Book } from "../../_common/models/book";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'book-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class BookDetails implements OnInit {

  @Input() item: Book;

  constructor() {
  }

  ngOnInit() {
  }

}
