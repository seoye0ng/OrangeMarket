import { IUserProfileBase } from './user';

export interface IProduct {
  id: string;
  itemName: string;
  price: number;
  link: string;
  itemImage: string;
  author: IUserProfileBase;
}

export interface IProductList {
  data: number;
  product: IProduct[];
}
