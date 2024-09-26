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
      <path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={tokens.colors[color]}
        fill={isActive ? tokens.colors[color] : 'none'}
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      {isActive && <path d="M8 21V11H16V21" fill="white" />}
      <path
        d="M9 21V12H15V21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin={isActive ? 'inherit' : 'round'}
        stroke={tokens.colors[color]}
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
    </svg>
  );
}

export default Post;
