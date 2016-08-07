import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Column } from "../../_common/models/column";
import { BasePage } from "../../_common/components/base/page";
import { matchById } from "../../_common/operators/match-by-id";
import { ColumnApi } from "../../_data/columns/index";
import { ColumnList } from "./list";
import { MenuItem } from "../../_common/models/menu-item";

@Component({
  selector: 'column-home',
  template: require('./home.html'),
  styles: [
    require('./home.scss')
  ],
  directives: [ColumnList]
})
export class ColumnHome extends BasePage {
  constructor(activatedRoute: ActivatedRoute, private api: ColumnApi) {
    super(activatedRoute);
  }

  items: Observable<MenuItem[]>;

  reload(params) {
    this.items = this.api.items
      .find(matchById(params.id))
      .map(columnToMenu)
      .toArray();
  }
}

function columnToMenu(column: Column): MenuItem {
  return {
    icon: column.avatar,
    description: column.bio,
    title: column.name,
    url: `./show/${column.id}`
  }
}
