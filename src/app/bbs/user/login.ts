import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs/Rx";
import { Auth } from "../../_common/services/auth";
import { Http } from "@angular/http";

@Component({
  selector: 'user-login',
  template: require('./login.html'),
  styles: [
    require('./login.scss')
  ]
})
export class UserLogin implements OnInit, OnDestroy {
  constructor(private router: Router, private auth: Auth, private http: Http) {
  }

  name: string;

  subscription: Subscription;

  ngOnInit() {
    this.subscription = this.router.routerState.queryParams.subscribe((params: {code: string, state: string})=> {
      const state = params.state;
      const code = params.code;
      if (!state && !code) {
        return this.router.navigateByUrl('/bbs');
      }
      if (decodeURIComponent(state) !== this.auth.csrfToken) {
        alert('安全码不匹配，请联系管理员！');
      } else {
        this.http.post('/api/login-from-github', {
          state: state,
          code: code,
          redirect_url: this.router.serializeUrl(this.router.createUrlTree(['/bbs/user/login']))
        }).subscribe((data)=> {
          this.name = data.text();
        }, (err)=> {
          console.error(err);
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
