'use client';

import { tokens } from '@/styles/token';

import { IIconDefaultProps } from './types/iconType';

function Post({
  isActive = false,
  width = 24,
  color = 'gray-300',
  onClick,
}: IIconDefaultProps) {
  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="3"
        fill={isActive ? tokens.colors[color] : 'none'}
        stroke={tokens.colors[color]}
        strokeWidth="2"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M12 8V16"
        stroke={isActive ? 'white' : tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M8 12L16 12"
        stroke={isActive ? 'white' : tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
    </svg>
  );
}

export default Post;
