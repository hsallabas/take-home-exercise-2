import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpend } from "../app-state/models";
import { select, Store } from "@ngrx/store";
import * as fromRootState from '../app-state';
import * as ServiceSpendActions from '../app-state/actions/service-spend.actions';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  public spendingByService$: Observable<Array<ServiceSpend>> = this.store.pipe(select(fromRootState.getServices));

  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.store.dispatch({ type: ServiceSpendActions.GET_SERVICE });
  }
}
