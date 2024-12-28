'use client';

import { useDisclosure } from '@nextui-org/react';
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
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const config = getHeaderConfig(pathname);
  console.log('pathname', pathname);
  if (!config) return null;

  const onRightClick = () => {
    switch (pathname) {
      case '/feed':
        goTo('/search');
        break;
      case '/upload':
        setIsHeaderClick(true);
        break;
      default:
        onOpen();
        console.log('drawer open');
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
    isOpen,
    onOpenChange,
  );

  return <DynamicHeader />;
}
