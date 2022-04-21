import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromServiceSpend from './reducers/service-spend.reducer';
import * as fromUserViews from './reducers/user-views.reducer';

export interface AppState {
    services: fromServiceSpend.State;
    userViews: fromUserViews.State
}

export const getServicesState = createFeatureSelector<fromServiceSpend.State>('services');
export const getUserViewsState = createFeatureSelector<fromUserViews.State>('userViews');

export const getServices = createSelector(
    getServicesState,
    (state: fromServiceSpend.State) => state
);

export const getUserViews = createSelector(
    getUserViewsState,
    (state: fromUserViews.State) => state
);

export const reducers: ActionReducerMap<AppState> = {
    services: fromServiceSpend.reducer,
    userViews: fromUserViews.reducer
};