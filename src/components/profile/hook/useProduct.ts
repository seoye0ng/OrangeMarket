import { useCallback } from 'react';

import { IProduct } from '@/api/types/product';

export function useProduct() {
  const productClick = useCallback((productData: IProduct) => {
    console.log(`click: ${productData.itemName}`);
    // TODO: 상품 클릭 시 상세 페이지 이동 or 상품 모달
  }, []);

  return { productClick };
}
