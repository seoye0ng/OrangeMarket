import classNames from 'classnames';

import { IProductList } from '@/api/types/product';
import Text from '@/components/common/text/Text';

import ProductCard from '../components/product/ProductCard';
import { useProduct } from '../hook/useProduct';

interface IProductListSectionProps {
  productList: IProductList;
  className?: string;
}

export default function ProductListContainer({
  productList,
  className,
}: IProductListSectionProps) {
  const { product } = productList;
  const { productClick } = useProduct();

  return (
    <section className={classNames(className)}>
      <Text className="mx-4" size="16px" weight="bold">
        판매중인 상품
      </Text>
      {product.length === 0 ? (
        <div className="mx-4">현재 판매중인 상품이 없습니다.</div>
      ) : (
        <div className="horizontal-scroll scrollbar-hidden mt-4 flex gap-15px px-4">
          {product.map((productData) => (
            <ProductCard
              key={productData.id}
              product={productData}
              onClick={() => productClick(productData)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
