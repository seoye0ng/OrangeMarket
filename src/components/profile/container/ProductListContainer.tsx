import classNames from 'classnames';

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
  const hasProducts = productList && productList.data > 0;

  if (!hasProducts) return null;

  return (
    <section className={classNames(className)}>
      <Text className="mx-4" size="16px" weight="bold">
        판매중인 상품
      </Text>
      <div className="horizontal-scroll scrollbar-hidden mt-4 flex gap-15px px-4">
        {productList.product.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => productClick(product)}
          />
        ))}
      </div>
    </section>
  );
}
