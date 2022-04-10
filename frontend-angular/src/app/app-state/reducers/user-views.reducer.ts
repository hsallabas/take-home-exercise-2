import { Action, createReducer, on } from "@ngrx/store";
import * as UserViewActions from '../actions/user-views.actions';
import { UserView } from "../models";

export interface State {
  userViews: UserView[],
}

export const initialState: State = {
  userViews: [],
};

const userViewsReducer = createReducer(
  initialState,
  on(UserViewActions.getViews, (state) => state),
  on(UserViewActions.getViewsSuccess, (state, result) => ({...state, userViews: result.payload}))
);

export function reducer(state: State | undefined, action: Action): any {
  return userViewsReducer(state, action);
}