import { IUserProfile } from './user';

export interface IProductBase {
  itemName: string;
  price: number;
  link: string;
  itemImage: string;
}

export interface IProduct extends IProductBase {
  id: string;
  author: IUserProfile;
}

export interface IProductList {
  data: number;
  product: IProduct[];
}

export interface IUploadProductRequest {
  product: IProductBase;
}

export interface IUploadProductResponse {
  product: IProduct;
}
