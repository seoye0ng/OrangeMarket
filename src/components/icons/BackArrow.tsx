'use client';

import { useIconActiveState } from '@/hooks/useIconActive';
import { tokens } from '@/styles/token';

import { IIconProps } from './types/iconType';

function BackArrow({
  width = 22,
  defaultColor = 'black',
  activeColor = 'black',
  onClick,
}: IIconProps) {
  const {
    color: iconColor,
    handleMouseDown,
    handleMouseUp,
  } = useIconActiveState(defaultColor, activeColor);

  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <path
        d="M17.4168 11H4.5835"
        stroke={tokens.colors[iconColor]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M11.0002 17.4167L4.5835 11L11.0002 4.58337"
        stroke={tokens.colors[iconColor]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
    </svg>
  );
}

export default BackArrow;
