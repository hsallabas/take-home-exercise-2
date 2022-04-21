import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServiceSpend, UserView } from 'src/app/app-state/models';
import * as fromRootState from '../../../app-state';
import * as UserViewsActions from '../../../app-state/actions/user-views.actions';

@Component({
  selector: 'app-user-views-body',
  templateUrl: './user-views-body.component.html',
  styleUrls: ['./user-views-body.component.scss']
})
export class UserViewsBodyComponent implements OnInit {
  @Input() public userViewState: {userViews: UserView[]; loadViews: boolean};
  public spendingByService$: Observable<Array<ServiceSpend>> = this.store.pipe(select(fromRootState.getServices));

  constructor(private readonly store: Store) { }

  ngOnInit() {}

  createView() {
    this.store.dispatch({ type: UserViewsActions.CREATE_VIEW, payload: {id: null, name: '', services: []} });
  }

}
