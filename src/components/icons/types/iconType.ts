import { IconColor } from '@/styles/token';

export interface IIconProps {
  width?: number;
  defaultColor?: IconColor;
  activeColor?: IconColor;
  onClick?: () => void;
}
