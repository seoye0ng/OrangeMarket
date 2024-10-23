import classNames from 'classnames';
import { useCallback } from 'react';

import ProductCard from './ProductCard';
import { IProduct, IProductList } from '@/api/types/product';

interface IProductListSectionProps {
  productList: IProductList;
  className?: string;
}

export default function ProductListSection({
  productList,
  className,
}: IProductListSectionProps) {
  const { product } = productList;

  // handleProductClick을 메모이제이션하여 리렌더링이 발생해도 새로운 함수가 생성되는 것을 방지
  const handleProductClick = useCallback((productData: IProduct) => {
    console.log(`click: ${productData.itemName}`);
    // TODO: 상품 클릭시 상품 상세페이지 이동 or 상품 모달
  }, []);

  return (
    <section className={classNames(className)}>
      <p className="mx-16px mb-4 text-16px font-bold leading-17px">
        판매중인 상품
      </p>
      {product.length === 0 ? (
        <div className="mx-16px">현재 판매중인 상품이 없습니다.</div>
      ) : (
        <div className="horizontal-scroll scrollbar-hidden flex gap-15px px-4">
          {product.map((productData) => (
            <ProductCard
              key={productData.id}
              product={productData}
              onClick={() => handleProductClick(productData)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
