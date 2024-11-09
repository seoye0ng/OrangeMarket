import { Color } from '@/styles/token';

export interface IIconProps {
  width?: number;
  defaultColor?: Color;
  activeColor?: Color;
  onClick?: () => void;
}

export interface IIconDefaultProps {
  isActive?: boolean;
  width?: number;
  color?: Color;
  onClick?: () => void;
}
