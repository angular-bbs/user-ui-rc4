import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { ShowcaseApi } from "../../_data/showcases/index";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Showcase } from "../../_common/models/showcase";
import { matchById } from "../../_common/operators/match-by-id";
import { ShowcaseDetails } from "../showcase/details";

@Component({
  selector: 'showcase-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ShowcaseDetails]
})
export class ShowcaseShow extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ShowcaseApi) {
    super(activatedRoute);
  }

  item: Observable<Showcase>;

  reload(params): void {
    this.item = this.api.query()
      .find(matchById(params.id));
  }
}
