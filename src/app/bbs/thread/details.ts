import { Component, OnInit, Input } from '@angular/core';
import { Thread } from "../../_common/models/thread";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'thread-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class ThreadDetails implements OnInit {
  @Input() item: Thread;

  constructor() {
  }

  ngOnInit() {
  }
}
