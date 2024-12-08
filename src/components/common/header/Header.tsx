'use client';

import { usePathname } from 'next/navigation';

import { headerConfig } from '@/config/headerConfig';
import { useHeaderContext } from '@/context/provider/headerContext';
import useNavigate from '@/hooks/useNavigate';

import withHeader from './withHeader';

const getHeaderConfig = (pathname: string) => {
  const matchedConfig = headerConfig.find(({ pathPattern }) =>
    pathPattern.test(pathname),
  );

  return matchedConfig?.config;
};

export default function Header() {
  const pathname = usePathname();
  const { goBack, goTo } = useNavigate();
  const { setIsHeaderClick } = useHeaderContext();

  const config = getHeaderConfig(pathname);

  if (!config) return null;

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
        setIsHeaderClick(true);
        // console.log('upload header click');
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
