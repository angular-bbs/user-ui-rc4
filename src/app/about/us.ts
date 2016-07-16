import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'about-us',
  template: require('./us.html'),
  styles: [
    require('./us.scss')
  ]
})
export class AboutUs implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
  
}
