import { Component } from "@angular/core";
import { BasePage } from "../../_common/components/base/page";
import { ActivatedRoute } from "@angular/router";
import { Column } from "../../_common/models/column";
import { Observable } from "rxjs/Observable";
import { matchById } from "../../_common/operators/match-by-id";
import { ColumnDetails } from "./details";
import { ColumnApi } from "../../_data/columns/index";

@Component({
  selector: 'column-show',
  template: require('./show.html'),
  styles: [
    require('./show.scss')
  ],
  directives: [ColumnDetails]
})
export class ColumnShow extends BasePage {
  constructor(activateRoute: ActivatedRoute, private api: ColumnApi) {
    super(activateRoute);
  }

  item: Observable<Column>;

  reload(params): void {
    this.item = this.api.query()
      .find(matchById(params.id));
  }
}
