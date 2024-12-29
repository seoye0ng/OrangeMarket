import { Button } from '@nextui-org/react';

import Text from '@/components/common/text/Text';
import { FontSize, Color } from '@/styles/token';

interface ITextButton {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: Color;
  size: FontSize;
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'bold';
}

export default function TextButton({
  children,
  onClick,
  className,
  color = 'primary-100',
  size = '12px',
  weight = 'normal',
}: ITextButton) {
  return (
    <Button
      className={className}
      variant="light"
      radius="full"
      onPress={onClick}
    >
      <Text size={size} color={color} weight={weight}>
        {children}
      </Text>
    </Button>
  );
}
