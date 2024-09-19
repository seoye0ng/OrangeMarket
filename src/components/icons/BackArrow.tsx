'use client';

import tokens from '@/styles/token';

import { IIconProps } from './types/iconType';

function BackArrow({ width = 22, color = 'black', onClick }: IIconProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M17.4168 11H4.5835"
        stroke={tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.0002 17.4167L4.5835 11L11.0002 4.58337"
        stroke={tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BackArrow;
