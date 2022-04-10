import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as UserViewActions from '../actions/user-views.actions'
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { UserViewsService } from "src/app/user-views/services/user-views.service";

@Injectable()
export class UserViewEffects {

  constructor(
    private actions$: Actions,
    private userViewsService: UserViewsService
  ) { }

  loadUserView$ = createEffect(() => this.actions$.pipe(
    ofType(UserViewActions.GET_VIEW),
    switchMap(() => this.userViewsService.getUserViews()
      .pipe(
        map(result => ({ type: UserViewActions.GET_VIEW_SUCCESS, payload: result })),
        catchError(() => EMPTY)
      ))
    )
  );

}