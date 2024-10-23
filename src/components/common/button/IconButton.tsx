import { isValidElement } from 'react';

interface IIconButtonProps {
  className?: string;
  label: string;
  icon?: React.ComponentType | JSX.Element; // ComponentType 또는 JSX.Element를 받을 수 있도록 처리
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function IconButton({
  className = '',
  icon: Icon,
  children,
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
      {children}
    </button>
  );
}
