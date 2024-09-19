export interface IIconProps {
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
