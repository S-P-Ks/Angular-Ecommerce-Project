import { createAction, props } from '@ngrx/store';

export const set_loading_spinner = '[shared state] set loading spinner';

export const SET_LOADING_SPINNER = createAction(
  set_loading_spinner,
  props<{ status: boolean }>()
);
