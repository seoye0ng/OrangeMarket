import { getRequest, postRequest } from '@/api/requests';
import {
  IProductList,
  IUploadProductRequest,
  IUploadProductResponse,
} from '@/api/types/product';

/* --- product GET 요청 --- */
export const productList = async (accountName: string) => {
  const response = await getRequest<IProductList>(`/product/${accountName}`);
  return response;
};

/* --- product POST 요청 --- */
export const uploadProduct = async (data: IUploadProductRequest) => {
  const response = await postRequest<
    IUploadProductResponse,
    IUploadProductRequest
  >('/product', data);

  return response;
};
