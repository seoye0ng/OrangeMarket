import BottomNav from '@/components/common/bottom-nav/BottomNav';
import Header from '@/components/common/header/Header';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <BottomNav />
    </>
  );
}
