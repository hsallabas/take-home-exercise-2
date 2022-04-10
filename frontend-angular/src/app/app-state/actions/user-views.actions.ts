import { createAction, props } from "@ngrx/store";

export const GET_VIEW = '[View] Get Views';
export const GET_VIEW_SUCCESS = '[View] Get Views Success';

export const getViews = createAction(
  GET_VIEW
);

export const getViewsSuccess = createAction(
  GET_VIEW_SUCCESS,
  props<any>()
);
