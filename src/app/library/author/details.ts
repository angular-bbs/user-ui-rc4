import { Component, OnInit, Input } from '@angular/core';
import { Author } from "../../_common/models/author";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'author-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class AuthorDetails implements OnInit {

  @Input() item: Author;

  constructor() {
  }

  ngOnInit() {
  }
}
