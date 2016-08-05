import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ResourceApi } from "../../_data/resources/index";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Rx";
import { Article } from "../../_common/models/article";
import { MenuItem } from "../../_common/models/menu-item";
import { ResourceList } from "./list";

@Component({
  selector: 'resource-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ResourceList]
})
export class ResourceHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ResourceApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params): void {
    this.items = this.api.items
      .map(resourceToMenuItem)
      .toArray();
  }
}

function resourceToMenuItem(resource: Article): MenuItem {
  return {
    title: resource.title,
    icon: resource.image,
    description: resource.summary,
    url: `/bbs/resource/show/${resource.id}`
  }
}
