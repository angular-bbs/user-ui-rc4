import { Component, OnInit, Input } from "@angular/core";
import { Partner } from "../../_common/models/partner";
import { HtmlViewer } from "../../_common/components/html/viewer";
import { TrustAsImgUrlPipe } from "../../_common/pipes/trust-as-img-url";

@Component({
  selector: 'partner-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ],
  directives: [HtmlViewer],
  pipes: [TrustAsImgUrlPipe]
})
export class PartnerDetails implements OnInit {

  @Input() item: Partner;

  constructor() {
  }

  ngOnInit() {
  }

}
