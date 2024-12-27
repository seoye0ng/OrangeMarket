import { useQuery } from '@tanstack/react-query';

import { productList } from '@/api/apiRequests/product';
import { productKeys } from '@/queries/product/productKeys';

function useProductList(accountName: string) {
  return useQuery({
    queryKey: productKeys.list(accountName),
    queryFn: () => productList(accountName),
  });
}

export default useProductList;
