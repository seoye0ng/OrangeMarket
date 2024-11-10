import { useState } from 'react';

import { Color } from '@/styles/token';

export function useIconActiveState(defaultColor: Color, activeColor: Color) {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
    // 마우스를 누를 때 active 상태로 변경
  };

  const handleMouseUp = () => {
    setIsActive(false);
    // 마우스를 놓을 때 원래 상태로 복구
  };

  return {
    color: isActive ? activeColor : defaultColor, // 상태에 따라 색상 변경
    handleMouseDown,
    handleMouseUp,
  };
}
