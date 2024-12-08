import classNames from 'classnames';
import React, { useMemo } from 'react';

import { FontSize, Color, tokens } from '@/styles/token';

interface ITextProps {
  children: React.ReactNode;
  size?: FontSize;
  weight?: 'thin' | 'light' | 'normal' | 'medium' | 'bold';
  color?: Color;
  className?: string;
}

const textStyles = {
  '8px': {
    fontSize: tokens.fontSize['8px'],
    lineHeight: tokens.lineHeight['12px'],
  },
  '10px': {
    fontSize: tokens.fontSize['10px'],
    lineHeight: tokens.lineHeight['14px'],
  },
  '12px': {
    fontSize: tokens.fontSize['12px'],
    lineHeight: tokens.lineHeight['17px'],
  },
  '14px': {
    fontSize: tokens.fontSize['14px'],
    lineHeight: tokens.lineHeight['17px'],
  },
  '16px': {
    fontSize: tokens.fontSize['16px'],
    lineHeight: tokens.lineHeight['18px'],
  },
  '18px': {
    fontSize: tokens.fontSize['18px'],
    lineHeight: tokens.lineHeight['20px'],
  },
  '20px': {
    fontSize: tokens.fontSize['20px'],
    lineHeight: tokens.lineHeight['24px'],
  },
  '22px': {
    fontSize: tokens.fontSize['22px'],
    lineHeight: tokens.lineHeight['28px'],
  },
  '24px': {
    fontSize: tokens.fontSize['24px'],
    lineHeight: tokens.lineHeight['30px'],
  },
} as const;

function Text({
  children,
  size = '16px',
  weight = 'normal',
  color = 'black',
  className,
}: ITextProps) {
  const styles = useMemo(() => {
    const { fontSize, lineHeight } = textStyles[size]; // 폰트 크기와 줄 간격을 매핑하여 가져오기
    const textColor = tokens.colors[color];

    return {
      fontSize,
      lineHeight,
      color: textColor,
    };
  }, [size, color]);

  return (
    <p
      className={classNames(className)}
      style={{
        fontWeight: weight,
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        color: styles.color,
      }}
    >
      {children}
    </p>
  );
}

export default React.memo(Text);
