import { Component, OnInit } from "@angular/core";
import { Auth } from "../../_common/services/auth";

@Component({
  selector: 'user-login',
  template: require('./login.html'),
  styles: [
    require('./login.scss')
  ]
})
export class UserLogin implements OnInit {
  constructor(private auth: Auth) {
  }

  ngOnInit() {
  }

}
