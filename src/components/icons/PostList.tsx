import { tokens } from '@/styles/token';
import { IIconDefaultProps } from './types/iconType';

const style = {
  transition: 'stroke 0.15s ease-out',
};

const paths = [
  'M22.75 3.25H3.25V7.58333H22.75V3.25Z',
  'M22.75 10.8334H3.25V15.1667H22.75V10.8334Z',
  'M22.75 18.4166H3.25V22.75H22.75V18.4166Z',
];

function PostList({ width = 26, color = 'gray-100' }: IIconDefaultProps) {
  const iconColor = tokens.colors[color];

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
          fill={iconColor}
          stroke={iconColor}
          strokeLinecap="round"
          style={style}
        />
      ))}
    </svg>
  );
}

export default PostList;
