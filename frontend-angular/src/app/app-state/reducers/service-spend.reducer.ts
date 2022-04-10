import { Action, createReducer, on } from "@ngrx/store";
import { ServiceSpend } from "../models";
import * as ServiceSpendActions from '../actions/service-spend.actions';

export interface State {
  services: ServiceSpend[],
}

export const initialState: State = {
  services: [],
};

const serviceSpendReducer = createReducer(
  initialState,
  on(ServiceSpendActions.getServices, (state) => state),
  on(ServiceSpendActions.getServicesSuccess, (state, result) => ({...state, services: result.payload}))
);

export function reducer(state: State | undefined, action: Action): any {
  return serviceSpendReducer(state, action);
}