import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ShowcaseApi } from "../../_data/showcases/index";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Observable";
import { Showcase } from "../../_common/models/showcase";
import { MenuItem } from "../../_common/models/menu-item";
import { ShowcaseList } from "./list";

@Component({
  selector: 'showcase-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ShowcaseList]
})
export class ShowcaseHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ShowcaseApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params): void {
    this.items = this.api.items
      .map(showcaseToMenuItem)
      .toArray();
  }
}

function showcaseToMenuItem(showcase: Showcase): MenuItem {
  return {
    title: showcase.title,
    icon: showcase.picture,
    description: `${[showcase.customer, showcase.author].join('&')}`,
    url: `/about/showcase/show/${showcase.id}`
  }
}
