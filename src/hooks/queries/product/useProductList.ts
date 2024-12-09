import { useQuery } from '@tanstack/react-query';

import { productList } from '@/api/apiRequests/product';

function useProductList(accountname: string) {
  return useQuery({
    queryKey: ['productList', accountname],
    queryFn: () => productList(accountname),
  });
}

export default useProductList;
