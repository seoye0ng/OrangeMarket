import classNames from 'classnames';

import { productList } from '@/mocks/productList';

import ProductCard from './ProductCard';

interface IProductListSectionProps {
  className?: string;
}

export default function ProductListSection({
  className,
}: IProductListSectionProps) {
  const { product, data } = productList;

  return (
    <section className={classNames('py-5', className)}>
      <p className="mx-16px mb-4 text-16px font-bold leading-17px">
        판매중인 상품
      </p>
      {data === 0 ? (
        <div className="mx-16px">현재 판매중인 상품이 없습니다.</div>
      ) : (
        <div className="horizontal-scroll scrollbar-hidden flex gap-15px px-4">
          {product.map((productData) => (
            <ProductCard key={productData.id} product={productData} />
          ))}
        </div>
      )}
    </section>
  );
}
