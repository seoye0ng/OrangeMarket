'use client';

import { extendVariants, Button } from '@nextui-org/react';

export const CustomButton = extendVariants(Button, {
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
      s: 'px-[11px] py-[7px] w-auto  h-auto text-tiny font-regular',
      m: 'px-[32px] py-[7px] w-auto h-auto text-small font-medium',
      ms: 'px-[40px] py-[8px] w-auto h-auto text-small font-medium',
      l: 'py-[13px] w-full h-auto text-small font-medium',
    },
  },
  defaultVariants: {
    radius: 'full',
  },
  compoundVariants: [
    {
      isDisabled: true,
      color: 'primary',
      class: 'opacity-100',
    },
  ],
});
