import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ServiceSpend, UserView } from 'src/app/app-state/models';
import * as fromRootState from '../../../app-state';

@Component({
  selector: 'app-user-views-body',
  templateUrl: './user-views-body.component.html',
  styleUrls: ['./user-views-body.component.scss']
})
export class UserViewsBodyComponent implements OnInit {
  @Input() public userViews: Array<UserView>;
  public spendingByService$: Observable<Array<ServiceSpend>> = this.store.pipe(select(fromRootState.getServices));

  constructor(private readonly store: Store) { }

  ngOnInit() {}

}
