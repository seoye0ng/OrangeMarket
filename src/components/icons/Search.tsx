'use client';

import { useIconActiveState } from '@/hooks/useIconActive';
import { tokens } from '@/styles/token';

import { IIconProps } from './types/iconType';

function Search({
  width = 22,
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
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={tokens.colors[iconColor]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M20.9999 21L16.6499 16.65"
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

export default Search;
