/* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
import { IProduct } from '@/api/types/product';
import CustomImage from '@/components/common/custom-image/CustomImage';
import Text from '@/components/common/text/Text';

interface IProductProps {
  product: IProduct;
  onClick?: () => void;
}

export default function ProductCard({ product, onClick }: IProductProps) {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (onClick) {
        onClick(); // 클릭과 동일한 로직 처리
      }
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
      <CustomImage
        className="aspect-[14/9] h-[90px] w-full rounded-8px"
        imageSrc={product.itemImage}
        alt={product.itemName}
      />
      <Text size="14px" className="ellipsis mt-6px px-2px">
        {product.itemName}
      </Text>
      <Text
        size="12px"
        color="primary-100"
        weight="bold"
        className="ellipsis mt-1 px-2px"
      >
        {product.price.toLocaleString('ko-KR')}
      </Text>
    </article>
  );
}
