/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import Image from 'next/image';

import { IProduct } from '@/api/types/product';

interface IProductProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProductProps) {
  return (
    <article className="max-w-[140px] cursor-pointer" role="button">
      <div className="rounded-8px w-inherit relative aspect-[14/9] h-[90px] w-full overflow-hidden">
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
