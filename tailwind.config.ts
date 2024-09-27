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
      fontSize: tokens.fontSize,
      zIndex: tokens.zIndex,
      spacing: tokens.spacing,
    },
  },
  plugins: [nextui()],
};
export default config;
