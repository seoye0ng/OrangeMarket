'use client';

import { usePathname } from 'next/navigation';
import Title from '@/components/common/title/Title';

const titleData: Record<string, { title: string; description: string }> = {
  '/signup': {
    title: '이메일로 회원가입',
    description: '',
  },
  'set-profile': {
    title: '프로필 설정',
    description: '나중에 언제든지 변경할 수 있습니다.',
  },
  '/login': {
    title: '로그인',
    description: '',
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentTitle = titleData[pathname] || {
    title: '',
    description: '',
  };

  return (
    <div className="w-full px-34px">
      <Title
        padding="pt-30px pb-10"
        title={currentTitle.title}
        description={currentTitle.description}
      />
      <main>{children}</main>
    </div>
  );
}
