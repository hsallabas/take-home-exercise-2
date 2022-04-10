import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ServiceSpendingService } from "src/app/dashboard/services/service-spending.service";
import * as ServiceSpendActions from '../actions'
import { EMPTY } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class ServiceSpendEffects {

  constructor(
    private actions$: Actions,
    private serviceSpendingService: ServiceSpendingService
  ) { }

  loadServiceSpending$ = createEffect(() => this.actions$.pipe(
    ofType(ServiceSpendActions.GET_SERVICE),
    switchMap(() => this.serviceSpendingService.getSpendingByService()
      .pipe(
        map(result => ({ type: ServiceSpendActions.GET_SERVICE_SUCCESS, payload: result })),
        catchError(() => EMPTY)
      ))
    )
  );

}