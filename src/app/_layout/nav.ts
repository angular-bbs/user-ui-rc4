import {Component, OnInit} from "@angular/core";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'layout-nav',
  template: require('./nav.html'),
  styles: [
    require('./nav.scss')
  ],
  directives: [RouterLink, RouterLinkActive]
})
export class LayoutNav implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
