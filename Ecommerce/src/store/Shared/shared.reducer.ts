import { createReducer, on } from '@ngrx/store';
import { set_loading_spinner, SET_LOADING_SPINNER } from './shared.action';
import { intialState } from './shared.state';

const _sharedReducer = createReducer(
  intialState,
  on(SET_LOADING_SPINNER, (state, action) => {
    return {
      ...state,
      showLoading: action.status,
    };
  })
);

export const SharedReducer = (state: any, action: any) => {
  return _sharedReducer(state, action);
};
