import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpend } from "../app-state/models";
import { select, Store } from "@ngrx/store";
import * as fromRootState from '../app-state';
import { tap } from "rxjs/operators";
import * as ServiceSpendActions from '../app-state/actions/service-spend.actions';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  public serviceState$: Observable<{services: ServiceSpend[]; loadServices: boolean}> = this.store.pipe(
    select(fromRootState.getServices),
    tap((serviceState) => {
      if (!serviceState.loadServices) {
        this.store.dispatch({ type: ServiceSpendActions.GET_SERVICE });
      }
    })
  );

  constructor(private readonly store: Store) { }
}
