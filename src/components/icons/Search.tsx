'use client';

import tokens from '@/styles/token';

interface SearchProps {
  width?: number;
  color?:
    | 'primary-50'
    | 'primary-100'
    | 'gray-50'
    | 'gray-100'
    | 'gray-200'
    | 'gray-300'
    | 'black';
  onClick?: () => void;
}

function Search({ width = 22, color = 'gray-300', onClick }: SearchProps) {
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
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        stroke={tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9999 21L16.6499 16.65"
        stroke={tokens.colors[color]}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Search;
