import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

import { tokens } from './src/styles/token';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/**/*.{js,ts,jsx,tsx}', // Next UI 컴포넌트 경로 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      boxShadow: {
        test1: 'inset 0 0 10px red',
        test2: 'inset 0 0 10px blue',
        test3: 'inset 0 0 10px royalblue',
        test4: 'inset 0 0 10px orange',
      },
      backgroundImage: {},
      colors: tokens.colors,
      lineHeight: tokens.fontSize,
      fontSize: tokens.fontSize,
      zIndex: tokens.zIndex,
      spacing: tokens.spacing,
      borderRadius: tokens.radius,
    },
  },
  plugins: [
    nextui({
      addCommonColors: true,
      layout: {
        fontSize: {
          tiny: tokens.fontSize['12px'],
          small: tokens.fontSize['14px'],
          medium: tokens.fontSize['16px'],
          large: tokens.fontSize['18px'],
        },
        lineHeight: {
          tiny: tokens.fontSize['17px'],
          small: tokens.fontSize['17px'],
          medium: tokens.fontSize['17px'],
          large: tokens.fontSize['17px'],
        },
        borderWidth: {
          small: '1px',
          medium: '1px',
          large: '2px',
        },
      },
      themes: {
        light: {
          colors: {
            primary: tokens.colors['primary-100'],
            secondary: tokens.colors['primary-50'],
            success: tokens.colors.success,
            warning: tokens.colors.warning,
            danger: tokens.colors.warning,
          },
        },
      },
    }),
  ],
};
export default config;
