import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Subscription";
import { StringMap } from "../../utils/index";

@Component({})
export abstract class BasePage implements OnInit, OnDestroy {
  constructor(protected activatedRoute: ActivatedRoute) {
  }

  activatedRouteSubscription: Subscription;

  ngOnInit() {
    this.activatedRouteSubscription = this.activatedRoute.params.subscribe((params)=> {
      this.reload(decode(params));
    });
  }

  ngOnDestroy() {
    this.activatedRouteSubscription.unsubscribe();
  }

  abstract reload(params: StringMap): void;
}

function decode(params: Object): StringMap {
  let result: StringMap = {};
  for (const key in params) {
    const value = params[key];
    result[key] = value && decodeURIComponent(value);
  }
  return result;
}
