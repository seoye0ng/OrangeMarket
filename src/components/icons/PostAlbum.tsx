/* eslint-disable react/no-array-index-key */
import { tokens } from '@/styles/token';

import { IIconDefaultProps } from './types/iconType';

const paths = [
  'M10.8333 3.25H3.25V10.8333H10.8333V3.25Z',
  'M22.7498 3.25H15.1665V10.8333H22.7498V3.25Z',
  'M22.7498 15.1666H15.1665V22.75H22.7498V15.1666Z',
  'M10.8333 15.1666H3.25V22.75H10.8333V15.1666Z',
];

const style = {
  transition: 'stroke 0.15s ease-out',
};

function PostAlbum({ width = 26, color = 'gray-100' }: IIconDefaultProps) {
  const strokeColor = tokens.colors[color];

  return (
    <svg
      width={width}
      height={width}
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {paths.map((d, index) => (
        <path
          key={index}
          d={d}
          fill={strokeColor}
          stroke={strokeColor}
          strokeLinecap="round"
          style={style}
        />
      ))}
    </svg>
  );
}

export default PostAlbum;
