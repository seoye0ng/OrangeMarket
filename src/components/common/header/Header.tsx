'use client';

import { usePathname } from 'next/navigation';

import { headerConfig } from '@/config/headerConfig';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import { useSearchContext } from '@/context/provider/SearchContext';
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
  const { setSearchTerm } = useSearchContext();

  const config = getHeaderConfig(pathname);

  if (!config) return null;

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
        break;
      default:
        break;
    }
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
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
