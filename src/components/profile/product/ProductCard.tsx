/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */

'use client';

import Image from 'next/image';

import { IProduct } from '@/api/types/product';

interface IProductProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      console.log(`click: ${product?.itemName}`);
    }
  };
  // TODO: 상품 클릭시 상품 상세페이지 or 상품 모달
  return (
    <article
      className="max-w-[140px] cursor-pointer"
      role="button"
      tabIndex={0} // focus 가능하게 설정
      aria-label={product?.itemName || '상품'}
      onClick={() => console.log(`click: ${product?.itemName}`)}
      onKeyDown={handleKeyDown} // 키보드 이벤트 추가
    >
      <div className="w-inherit relative aspect-[14/9] h-[90px] w-full overflow-hidden rounded-8px">
        <Image
          src={product.itemImage}
          sizes="100vw"
          alt={product.itemName}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <p className="ellipis mt-6px px-2px text-14px font-normal leading-17px">
        {product?.itemName}
      </p>
      <p className="mt-1 px-2px text-12px font-bold leading-17px text-primary">
        {product?.price}
      </p>
    </article>
  );
}
