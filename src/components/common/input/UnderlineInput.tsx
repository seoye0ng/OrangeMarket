'use client';

import { extendVariants, Input } from '@nextui-org/react';

export const UnderlineInput = extendVariants(Input, {
  variants: {
    color: {
      stone: {
        label: ['text-gray-300 group-data-[filled-within=true]:text-gray-300'],
        inputWrapper: [
          'shadow-[0_1px_0px_0_#DBDBDB] hover:shadow-[0_1px_0px_0_#C4C4C4] after:bg-primary-100 group-data-[focus=true]:shadow-none',
        ],
        input: [
          'group-data-[has-value=true]:text-black placeholder:text-gray100',
        ],
      },
      warning: {
        inputWrapper: [
          'shadow-[0_1px_0px_0_#EB5757] hover:shadow-[0_1px_0px_0_#EB5757] after:bg-warning group-data-[focus=true]:shadow-none',
        ],
        label: ['text-warning group-data-[filled-within=true]:text-warning'],
        input: [
          'group-data-[has-value=true]:text-black placeholder:text-gray100',
        ],
      },
    },
    size: {
      full: {
        inputWrapper: ['w-full h-auto border-b-0 after:h-[1px]'],
        label: [
          'group-data-[filled-within=true]:scale-100 static mb-[10px] text-tiny',
        ],
        innerWrapper: ['pb-2'],
        input: ['text-small'],
      },
    },
  },
  defaultVariants: {
    color: 'stone',
    size: 'full',
  },
});
