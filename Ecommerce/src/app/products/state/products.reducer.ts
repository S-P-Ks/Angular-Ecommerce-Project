import { createReducer, on } from '@ngrx/store';
import {
  LoadHeadPhones,
  LoadLaptops,
  LoadSmartPhones,
} from './products.action';
import { intialState } from './products.state';

export const _productReducer = createReducer(
  intialState,
  on(LoadHeadPhones, (state, action: any) => {
    let result = { ...state, HeadPhones: [...action.HeadPhones] };
    return result;
  }),
  on(LoadLaptops, (state, action) => {
    let result = { ...state, Laptops: [...action.Laptops] };
    return result;
  }),
  on(LoadSmartPhones, (state, action) => {
    let result = { ...state, SmartPhones: [...action.SmartPhones] };
    return result;
  })
);

export const ProductReducer = (state: any, action: any) => {
  return _productReducer(state, action);
};
