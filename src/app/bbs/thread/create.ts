import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'thread-create',
  template: require('./create.html'),
  styles: [
    require('./create.scss')
  ]
})
export class ThreadCreate implements OnInit {
  constructor(private http: Http) {
  }

  ngOnInit() {
  }

}
