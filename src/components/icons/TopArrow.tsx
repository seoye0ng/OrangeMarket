import { IIconDefaultProps } from './types/iconType';

function TopArrow({ color = 'white' }: IIconDefaultProps) {
  return (
    <svg
      width="23"
      height="25"
      viewBox="0 0 23 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.5 24L11.5 1.5M11.5 1.5L22 12M11.5 1.5L0.999999 12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TopArrow;
