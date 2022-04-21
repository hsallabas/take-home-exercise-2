import { Action, createReducer, on } from "@ngrx/store";
import * as UserViewActions from '../actions/user-views.actions';
import { UserView } from "../models";

export interface State {
  userViews: UserView[];
  loadViews: boolean;
}

export const initialState: State = {
  userViews: [],
  loadViews: false
};

const userViewsReducer = createReducer(
  initialState,
  on(UserViewActions.getViews, (state) => state),
  on(UserViewActions.getViewsSuccess, (state, result) => ({...state, userViews: [...result.payload].sort((a,b) => b > a ? 1 : -1), loadViews: true})),
  on(UserViewActions.createView, (state, data) => {
    if (data.payload.id) {
      return {...state, userViews: [data.payload, ...state.userViews.filter((x) => x.id !== null)]};
    }
    return {...state, userViews: [data.payload, ...state.userViews]};
  }),
  on(UserViewActions.cancelCreateView, (state) => ({...state, userViews: state.userViews.filter((x) => x.id !== null)})),
  on(UserViewActions.updateView, (state, data) => {
    const index = state.userViews.findIndex((x) => x.id === data.payload.id)
    const temp = [...state.userViews];
    temp[index] = data.payload;
    return ({...state, userViews: temp});
  }),
  on(UserViewActions.deleteView, (state, data) => ({...state, userViews: state.userViews.filter((x) => x.id !== data.payload.id)})),
);

export function reducer(state: State | undefined, action: Action): any {
  return userViewsReducer(state, action);
}