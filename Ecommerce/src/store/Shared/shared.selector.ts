import { createFeatureSelector, createSelector } from '@ngrx/store';
import { App_State } from '../app.state';
import { SharedState } from './shared.state';

export const SHARED_STATE_NAME = 'shared';

export const getAppState =
  createFeatureSelector<SharedState>(SHARED_STATE_NAME);

export const getLoading = createSelector(getAppState, (state) => {
  return state.showLoading;
});
