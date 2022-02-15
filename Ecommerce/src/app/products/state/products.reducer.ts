import { createReducer, on } from '@ngrx/store';
import { LoadHeadPhones } from './products.action';
import { intialState } from './products.state';

export const _productReducer = createReducer(
  intialState,
  on(LoadHeadPhones, (state, action: any) => {
    console.log(action);
    console.log(state);
    return { ...state, HeadPhones: [...action.HeadPhones] };
  })
);

export const ProductReducer = (state: any, action: any) => {
  return _productReducer(state, action);
};
