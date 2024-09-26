import { IconColor } from '@/styles/token';

export interface IIconProps {
  width?: number;
  defaultColor?: IconColor;
  activeColor?: IconColor;
  onClick?: () => void;
}

export interface IIconDefaultProps {
  isActive: boolean;
  width?: number;
  color?: IconColor;
  onClick?: () => void;
}
