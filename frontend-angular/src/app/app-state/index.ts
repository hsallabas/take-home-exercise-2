import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromServiceSpend from './reducers';

export interface appState {
    services: fromServiceSpend.State;
}

export const reducers: ActionReducerMap<appState> = {
    services: fromServiceSpend.reducer
};

export const getServicesState = createFeatureSelector<fromServiceSpend.State>('services');

export const getServices = createSelector(
    getServicesState,
    (state: fromServiceSpend.State) => state.services
);