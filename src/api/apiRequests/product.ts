import { getRequest } from '@/api/requests';
import { IProductList } from '@/api/types/product';

/* --- product GET 요청 --- */
export const productList = async (accountName: string) => {
  const response = await getRequest<IProductList>(`/product/${accountName}`);
  return response;
};
