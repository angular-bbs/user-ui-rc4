import { Component, OnInit, Input } from "@angular/core";
import { Showcase } from "../../_common/models/showcase";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'showcase-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class ShowcaseDetails implements OnInit {

  @Input() item: Showcase;

  constructor() {
  }

  ngOnInit() {
  }

}
