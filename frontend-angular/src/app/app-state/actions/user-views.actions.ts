import { createAction, props } from "@ngrx/store";
import { UserView } from "../models";

export const GET_VIEW = '[View] Get Views';
export const GET_VIEW_SUCCESS = '[View] Get Views Success';
export const CREATE_VIEW = '[View] Create View';
export const CANCEL_CREATE_VIEW = '[View] Cancel Create View';
export const UPDATE_VIEW = '[View] Update View';
export const DELETE_VIEW = '[View] Delete View';

export const getViews = createAction(
  GET_VIEW
);

export const getViewsSuccess = createAction(
  GET_VIEW_SUCCESS,
  props<any>()
);

export const createView = createAction(
  CREATE_VIEW,
  props<{ payload: UserView }>()
);

export const cancelCreateView = createAction(
  CANCEL_CREATE_VIEW
);

export const updateView = createAction(
  UPDATE_VIEW,
  props<{ payload: UserView }>()
);

export const deleteView = createAction(
  DELETE_VIEW,
  props<{ payload: {id: number} }>()
);