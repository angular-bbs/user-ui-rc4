import { Component, OnInit, Input } from '@angular/core';
import { Author } from "../../_common/models/author";

@Component({
  selector: 'author-details',
  template: require('./details.html'),
  styles: [
    require('./details.scss')
  ]
})
export class AuthorDetails implements OnInit {

  @Input() item: Author;

  constructor() {
  }

  ngOnInit() {
  }
}
