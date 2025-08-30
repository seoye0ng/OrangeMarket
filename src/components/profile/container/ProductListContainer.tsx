import classNames from 'classnames';

import EmptyState from '@/components/common/empty-state/EmptyState';
import Text from '@/components/common/text/Text';
import useProductList from '@/queries/product/useProductList';

import ProductCard from '../components/product/ProductCard';
import { useProduct } from '../hook/useProduct';

interface IProductListSectionProps {
  accountName: string;
  className?: string;
}

export default function ProductListContainer({
  accountName,
  className,
}: IProductListSectionProps) {
  const { data: productList } = useProductList(accountName);
  const { productClick } = useProduct();

  return (
    <section className={classNames(className)}>
      <Text className="mx-4" size="16px" weight="bold">
        판매중인 상품
      </Text>
      {productList?.data === 0 ? (
        <EmptyState
          className="mx-4"
          description="현재 판매중인 상품이 없습니다."
        />
      ) : (
        <div className="horizontal-scroll scrollbar-hidden mt-4 flex gap-15px px-4">
          {productList?.product.map((productData) => (
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
