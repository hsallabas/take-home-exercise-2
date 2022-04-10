import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpend } from "../app-state/models";
import { select, Store } from "@ngrx/store";
import * as fromRootState from '../app-state';
import * as ServiceSpendActions from '../app-state/actions';
import { tap } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  public spendingByService$: Observable<Array<ServiceSpend>> = this.store.pipe(
    select(fromRootState.getServices),
    tap((services) => {
      if (!services.length) {
        this.store.dispatch({ type: ServiceSpendActions.GET_SERVICE });
      }
    })
  );

  constructor(private readonly store: Store) { }
}
