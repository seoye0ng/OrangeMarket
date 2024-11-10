'use client';

import { usePathname } from 'next/navigation';

import { headerConfig, IHeaderConfig } from '@/config/headerConfig';

import withHeader from './withHeader';
import useNavigate from '@/hooks/useNavigate';

const getHeaderConfig = (pathname: string): IHeaderConfig | undefined => {
  if (pathname.startsWith('/post')) return headerConfig['/post'];
  return headerConfig[pathname];
};

export default function Header() {
  const pathname = usePathname();

  const config = getHeaderConfig(pathname);

  if (!config) return null;

  const { goBack, goTo } = useNavigate();

  const handleSearch = (searchTerm: string) => {
    console.log('ref 작동하심?', searchTerm);
    // 검색 api 호출
  };

  const onRightClick = () => {
    switch (pathname) {
      case '/':
        goTo('/search');
        break;
      case '/profile':
        // openModal();
        console.log('더보기 모달 open');
        break;
      case '/upload':
        // handleUpload();
        goTo('/');
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
    goBack,
    onRightClick,
  );

  return <DynamicHeader />;
}
