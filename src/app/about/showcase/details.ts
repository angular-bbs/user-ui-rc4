import { Component, OnInit, Input } from "@angular/core";
import { Showcase } from "../../_common/models/showcase";

@Component({
  selector: 'showcase-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class ShowcaseDetails implements OnInit {

  @Input() item: Showcase;

  constructor() {
  }

  ngOnInit() {
  }

}
