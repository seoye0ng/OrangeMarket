import type { Metadata } from 'next';

import BottomNav from '@/components/common/bottom-nav/BottomNav';
import Header from '@/components/common/header/Header';
import Provider from '@/providers';
import './globals.css';
import { sans } from '@/utils/fonts';

export const metadata: Metadata = {
  title: 'orange-market',
  description: '일상을 공유하고, 상품을 등록하여 홍보 및 판매할 수 있는 SNS',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={sans.className}>
        <Header />
        <Provider>{children}</Provider>
        <BottomNav />
      </body>
    </html>
  );
}
