import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { PartnerApi } from "../../_data/partners/index";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Partner } from "../../_common/models/partner";
import { matchById } from "../../_common/operators/match-by-id";
import { PartnerDetails } from "../partner/details";

@Component({
  selector: 'partner-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [PartnerDetails]
})
export class PartnerShow extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: PartnerApi) {
    super(activatedRoute);
  }

  item: Observable<Partner>;

  reload(params): void {
    this.item = this.api.query()
      .find(matchById(params.id));
  }
}
