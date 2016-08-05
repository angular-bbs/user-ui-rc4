import { Component, OnInit, Input } from "@angular/core";
import { Partner } from "../../_common/models/partner";

@Component({
  selector: 'partner-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class PartnerDetails implements OnInit {

  @Input() item: Partner;

  constructor() {
  }

  ngOnInit() {
  }

}
