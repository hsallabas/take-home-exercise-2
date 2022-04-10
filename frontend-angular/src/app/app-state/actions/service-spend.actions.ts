import { createAction, props } from "@ngrx/store";

export const GET_SERVICE = '[Service] Get Services';
export const GET_SERVICE_SUCCESS = '[Service] Get Services Success';

export const getServices = createAction(
  GET_SERVICE
);

export const getServicesSuccess = createAction(
  GET_SERVICE_SUCCESS,
  props<any>()
);
