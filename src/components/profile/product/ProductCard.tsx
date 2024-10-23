/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import Image from 'next/image';

import { IProduct } from '@/api/types/product';

interface IProductProps {
  product: IProduct;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: IProductProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick; // 클릭과 동일한 로직 처리
    }
  };
  return (
    <article
      className="max-w-[140px] cursor-pointer"
      role="button"
      tabIndex={0} // focus 가능하게 설정
      aria-label={product.itemName || '상품'}
      onClick={onClick}
      onKeyDown={handleKeyDown} // 키보드 이벤트 추가
    >
      <div className="relative aspect-[14/9] h-[90px] w-full overflow-hidden rounded-8px">
        <Image
          src={product.itemImage}
          sizes="100vw"
          alt={product.itemName}
          fill
          className="object-cover"
        />
      </div>
      <p className="ellipis mt-6px px-2px text-14px font-normal leading-17px">
        {product.itemName}
      </p>
      <p className="mt-1 px-2px text-12px font-bold leading-17px text-primary">
        {product.price.toLocaleString('ko-KR')}
      </p>
    </article>
  );
}
