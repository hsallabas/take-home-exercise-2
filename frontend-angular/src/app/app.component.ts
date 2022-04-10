import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as ServiceSpendActions from './app-state/actions/service-spend.actions';

@Component({
  selector: "app-root",
  template: "<router-outlet></router-outlet>"
})
export class AppComponent implements OnInit {

  constructor(private readonly store: Store) {}

  ngOnInit(): void {
    this.store.dispatch({ type: ServiceSpendActions.GET_SERVICE });
  }
}
