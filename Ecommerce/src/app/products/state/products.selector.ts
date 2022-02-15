import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from './products.state';

export const Products_State_Name = 'products';

export const getProductsFeature =
  createFeatureSelector<Product>(Products_State_Name);

export const getHeadphones = createSelector(getProductsFeature, (state) => {
  return state.HeadPhones;
});

export const getSmartphones = createSelector(getProductsFeature, (state) => {
  return state.SmartPhones;
});

export const getLaptops = createSelector(getProductsFeature, (state) => {
  return state.Laptops;
});
