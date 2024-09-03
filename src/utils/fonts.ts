import localFont from 'next/font/local';

export const sans = localFont({
  src: [
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Thin.woff2',
      weight: '100',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Light.woff2',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Bold.woff2',
      weight: '700',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Thin.ttf',
      weight: '100',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Light.ttf',
      weight: '300',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Regular.ttf',
      weight: '400',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Medium.ttf',
      weight: '500',
    },
    {
      path: '../../public/assets/fonts/SpoqaHanSansNeo-Bold.ttf',
      weight: '700',
    },
  ],
  // display: 'fallback',
  variable: '--font-sans',
});
