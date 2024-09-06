import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/**/*.{js,ts,jsx,tsx}', // Next UI 컴포넌트 경로 추가
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
      backgroundImage: {},
      colors: {
        primary: {
          50: '#FFC7A7',
          100: '#F26E22',
        },
        gray: {
          50: '#F2F2F2',
          100: '#DBDBDB',
          200: '#C4C4C4',
          300: '#767676',
        },
        black: '#000000',
        white: '#FFFFFF',
        success: '#17c964',
        warning: '#EB5757',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
