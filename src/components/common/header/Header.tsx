'use client';

import { usePathname, useRouter } from 'next/navigation';

import { headerConfig } from '@/config/headerConfig';

import withHeader from './withHeader';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();

  const config = headerConfig[pathname];

  if (!config) return null;

  const handleBackClick = () => {
    router.back();
  };

  const handleSearch = (searchTerm: string) => {
    console.log('ref 작동하심?', searchTerm);
    // 검색 api 호출
  };

  const handleRightClick = () => {
    switch (pathname) {
      case '/':
        console.log('검색');
        router.push('/search');
        break;
      case '/profile':
        // openModal();
        console.log('더보기 모달 open');
        break;
      case '/upload':
        // handleUpload();
        console.log('업로드');
        router.push('/');
        break;
      default:
        break;
    }
  };

  const DynamicHeader = withHeader(
    config.title,
    config.LeftIcon,
    config.RightIcon,
    config.RightButton,
    config.RightSearchForm,
    config.rightButtonProps,
    { ...config.rightSearchFormProps, onSearch: handleSearch },
    handleBackClick,
    handleRightClick,
  );

  return <DynamicHeader />;
}
