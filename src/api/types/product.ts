import { IUserProfile } from './user';

export interface IProduct {
  id: string;
  itemName: string;
  price: number;
  link: string;
  itemImage: string;
  author: IUserProfile;
}

export interface IProductList {
  data: number;
  product: IProduct[];
}
