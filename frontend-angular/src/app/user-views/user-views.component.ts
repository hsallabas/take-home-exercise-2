import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UserView } from '../app-state/models';
import * as fromRootState from '../app-state';
import * as UserViewsActions from '../app-state/actions/user-views.actions';

@Component({
  selector: 'app-user-views',
  templateUrl: './user-views.component.html',
  styleUrls: ['./user-views.component.scss']
})
export class UserViewsComponent implements OnInit {
  public userViews$: Observable<Array<UserView>> = this.store.pipe(
    select(fromRootState.getUserViews),
    tap((userViews) => {
      if (!userViews.length) {
        this.store.dispatch({ type: UserViewsActions.GET_VIEW });
      }
    })
  );

  constructor(private readonly store: Store) { }

  ngOnInit() {
  }

}
