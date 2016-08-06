import { Component, OnInit, Input } from "@angular/core";
import { MenuItem } from "../../models/menu-item";
import { TrustAsImgUrlPipe } from "../../pipes/trust-as-img-url";

@Component({
  selector: 'menu-list',
  template: require('./list.html'),
  styles: [
    require('./list.scss')
  ],
  pipes: [TrustAsImgUrlPipe]
})
export class MenuList implements OnInit {
  constructor() {
  }

  @Input() items: MenuItem[];

  ngOnInit() {
  }

}
