import { Component, OnInit, Input } from "@angular/core";
import { Column } from "../../_common/models/column";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'column-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class ColumnDetails implements OnInit {
  constructor() {
  }

  @Input() item: Column;

  ngOnInit() {
  }

}
