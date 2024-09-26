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
        d="M20 22V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V22"
        fill={isActive ? tokens.colors[color] : 'none'}
        stroke={tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M4 22H20"
        stroke={tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          transition: 'stroke 0.15s ease-out',
        }}
      />
      <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        fill={isActive ? tokens.colors[color] : 'none'}
        stroke={tokens.colors[color]}
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

export default Post;
