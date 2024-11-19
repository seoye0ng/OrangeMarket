import BottomNav from '@/components/common/bottom-nav/BottomNav';
import Header from '@/components/common/header/Header';
import ContextProvider from '@/context/provider';

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextProvider>
      <Header />
      {children}
      <BottomNav />
    </ContextProvider>
  );
}
