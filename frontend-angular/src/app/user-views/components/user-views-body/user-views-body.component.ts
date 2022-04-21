import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ServiceSpend, UserView } from 'src/app/app-state/models';
import * as fromRootState from '../../../app-state';
import * as UserViewsActions from '../../../app-state/actions/user-views.actions';
import * as ServiceSpendActions from '../../../app-state/actions/service-spend.actions';

@Component({
  selector: 'app-user-views-body',
  templateUrl: './user-views-body.component.html',
  styleUrls: ['./user-views-body.component.scss']
})
export class UserViewsBodyComponent implements OnInit {
  @Input() public userViewState: {userViews: UserView[]; loadViews: boolean};
  public serviceState$: Observable<{services: ServiceSpend[]; loadServices: boolean}> = this.store.pipe(
    select(fromRootState.getServices),
    tap((serviceState) => {
      if (!serviceState.loadServices) {
        this.store.dispatch({ type: ServiceSpendActions.GET_SERVICE });
      }
    })
  );

  constructor(private readonly store: Store) { }

  ngOnInit() {}

  createView() {
    this.store.dispatch({ type: UserViewsActions.CREATE_VIEW, payload: {id: null, name: '', services: []} });
  }

}
