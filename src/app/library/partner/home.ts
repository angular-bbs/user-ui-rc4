import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PartnerApi } from "../../_data/partners/index";
import { BasePage } from "../../_common/components/base/page";
import { Observable } from "rxjs/Observable";
import { Partner } from "../../_common/models/partner";
import { MenuItem } from "../../_common/models/menu-item";
import { PartnerList } from "./list";

@Component({
  selector: 'partner-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [PartnerList]
})
export class PartnerHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: PartnerApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params): void {
    this.items = this.api.query()
      .map(partnerToMenuItem)
      .toArray();
  }
}

function partnerToMenuItem(partner: Partner): MenuItem {
  return {
    title: partner.name,
    icon: partner.avatar,
    description: partner.description,
    url: `./show/${partner.id}`
  }
}
