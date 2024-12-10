import { getRequest } from '@/api/requests';
import { IProductList } from '@/api/types/product';

/* --- product GET 요청 --- */
export const productList = async (accountname: string) => {
  const response = await getRequest<IProductList>(`/product/${accountname}`);
  return response;
};
