'use client';

import { useIconActiveState } from '@/hooks/useIconActive';
import { tokens } from '@/styles/token';

import { IIconProps } from './types/iconType';

function SMore({
  width = 18,
  defaultColor = 'gray-200',
  activeColor = 'gray-300',
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
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <path
        d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
        fill={tokens.colors[iconColor]}
        stroke={tokens.colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5Z"
        fill={tokens.colors[iconColor]}
        stroke={tokens.colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15Z"
        fill={tokens.colors[iconColor]}
        stroke={tokens.colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
    </svg>
  );
}

export default SMore;
