import { createAction, props } from '@ngrx/store';
import { HeadPhone, Laptop, SmartPhone } from 'src/app/models/user';

export const loadHeadphones = '[products page] load HeadPhones';
export const loadSmartphones = '[products page] load SmartPhones';
export const loadLaptops = '[products page] load Laptops';

export const getHeadPhone = '[products page] get HeadPhone';
export const getSmartPhone = '[products page] get SmartPhone';
export const getLaptop = '[products page] get Laptop';

export const getHeadPhoneSuccess = '[products page] get HeadPhone success';
export const getSmartPhoneSuccess = '[products page] get SmartPhone success';
export const getLaptopSuccess = '[products page] get LaptopPhone success';

export const LoadHeadPhones = createAction(
  loadHeadphones,
  props<{ HeadPhones: HeadPhone[] | any }>()
);
export const LoadSmartPhones = createAction(
  loadSmartphones,
  props<{ SmartPhones: SmartPhone[] | any }>()
);
export const LoadLaptops = createAction(
  loadLaptops,
  props<{ Laptops: Laptop[] | any }>()
);

export const GetHeadPhones = createAction(getHeadPhone);
export const GetSmartPhones = createAction(getSmartPhone);
export const GetLaptops = createAction(getLaptop);

export const GetHeadPhoneSuccess = createAction(getHeadPhoneSuccess);
export const GetSmartPhoneSuccess = createAction(getSmartPhoneSuccess);
export const GetLaptopSuccess = createAction(getLaptopSuccess);
