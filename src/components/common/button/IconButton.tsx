import Image from 'next/image';
import { isValidElement } from 'react';

interface IIconButtonProps {
  className?: string;
  label: string;
  icon?: React.ComponentType | JSX.Element; // ComponentType 또는 JSX.Element를 받을 수 있도록 처리
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  onClick?: () => void;
}

export default function IconButton({
  className = '',
  icon: Icon,
  imageSrc,
  imageWidth,
  imageHeight,
  label,
  onClick,
}: IIconButtonProps) {
  return (
    <button
      className={className}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      {/* 아이콘이 ComponentType일 경우 컴포넌트 렌더링 */}
      {Icon && typeof Icon === 'function' && <Icon />}

      {/* 아이콘이 JSX.Element일 경우 그대로 렌더링 */}
      {Icon && isValidElement(Icon) && Icon}
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={`${label} 아이콘 이미지`}
          width={imageWidth}
          height={imageHeight}
          priority
        />
      )}
    </button>
  );
}
