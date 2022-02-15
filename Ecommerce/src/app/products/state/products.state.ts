import { HeadPhone, Laptop, SmartPhone } from 'src/app/models/user';

export interface Product {
  HeadPhones: HeadPhone[];
  SmartPhones: SmartPhone[];
  Laptops: Laptop[];
}

export const intialState: Product = {
  HeadPhones: [],
  SmartPhones: [],
  Laptops: [],
};
