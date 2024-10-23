'use client';

import { extendVariants, Button } from '@nextui-org/react';

export interface ICustomButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'white';
  isDisabled?: boolean;
  radius?: 'full';
  size?: 's' | 'm' | 'ms' | 'l';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const commonStyle = 'min-w-fit h-fit';

const CustomButton = extendVariants(Button, {
  variants: {
    color: {
      primary: 'text-white bg-primary',
      white: 'bg-white text-gray-300 shadow-[0px_0px_0px_1px_#DBDBDB]',
    },
    isDisabled: {
      true: 'bg-secondary text-white cursor-not-allowed',
    },
    radius: {
      full: 'rounded-full',
    },
    size: {
      s: `${commonStyle} w-[56px] py-[7px] text-tiny font-regular`,
      ms: `${commonStyle} w-[90px] py-[8px] text-small font-medium`,
      m: `${commonStyle} w-[100px] py-[8px] text-small font-medium`,
      ml: `${commonStyle} w-[120px] py-[8px] text-small font-medium`,
      l: `${commonStyle} w-full py-[13px] text-small font-medium`,
    },
  },
  defaultVariants: {
    radius: 'full',
    size: 'l',
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: 'primary',
      class: 'opacity-100',
    },
  ],
});

export default CustomButton;
