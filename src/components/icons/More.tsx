'use client';

import { useIconActiveState } from '@/hooks/useIconActive';
import { tokens } from '@/styles/token';

import { IIconProps } from './types/iconType';

function More({
  width = 24,
  defaultColor = 'gray-300',
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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        fill={tokens.colors[iconColor]}
        stroke={tokens.colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
        fill={tokens.colors[iconColor]}
        stroke={tokens.colors[iconColor]}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
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

export default More;
