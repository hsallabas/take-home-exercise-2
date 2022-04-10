import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpend } from "../app-state/models";
import { select, Store } from "@ngrx/store";
import * as fromRootState from '../app-state';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent {
  public spendingByService$: Observable<Array<ServiceSpend>> = this.store.pipe(select(fromRootState.getServices));

  constructor(private readonly store: Store) { }
}
