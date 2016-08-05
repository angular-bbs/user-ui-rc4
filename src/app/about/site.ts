import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about-site',
  template: require('./site.jade'),
  styles: [
    require('./site.scss')
  ]
})
export class AboutSite implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

}
