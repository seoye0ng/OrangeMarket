'use client';

import { useDisclosure } from '@nextui-org/react';
import { usePathname } from 'next/navigation';

import BottomDrawer, {
  IdrawerContents,
} from '@/components/common/drawer/BottomDrawer';
import AlertModal from '@/components/common/modal/AlertModal';
import { useHeaderContext } from '@/context/provider/HeaderContext';
import { useSearchContext } from '@/context/provider/SearchContext';
import useNavigate from '@/hooks/useNavigate';
import { getHeaderConfig } from '@/utils/headerUtils';

import HeaderActionSection from './HeaderActionSection';
import HeaderTitleSection from './HeaderTitleSection';

export default function Header() {
  const pathname = usePathname();

  const { goBack, goTo } = useNavigate();
  const { setIsHeaderClick } = useHeaderContext();
  const { setSearchTerm } = useSearchContext();
  const {
    isOpen: isDrawerOpen,
    onOpen: openDrawer,
    onOpenChange: closeDrawer,
  } = useDisclosure();
  const {
    isOpen: isModalOpen,
    onOpen: openModal,
    onOpenChange: closeModal,
  } = useDisclosure();

  const config = getHeaderConfig(
    pathname,
    goBack,
    goTo,
    setIsHeaderClick,
    openDrawer,
    setSearchTerm,
  );

  if (!config) return null;

  const headerDrawerContents: IdrawerContents[] = [
    {
      title: '설정 및 개인정보',
      action: () => console.log('Go to settings'),
    },
    { title: '로그아웃', action: openModal },
  ];

  return (
    <>
      <header className="h-header flex items-center justify-between px-4">
        <HeaderTitleSection
          title={config?.title}
          LeftIcon={config?.LeftButton}
          onLeftClick={config?.onLeftClick}
        />
        <HeaderActionSection
          RightIcon={config?.RightIcon}
          onRightClick={config?.onRightClick}
          RightButton={config?.RightButton}
          rightButtonProps={config?.rightButtonProps}
          RightForm={config?.RightForm}
          rightFormProps={config?.rightFormProps}
        />
      </header>
      <BottomDrawer
        isOpen={isDrawerOpen}
        onOpenChange={closeDrawer}
        contents={headerDrawerContents}
      />
      <AlertModal
        isOpen={isModalOpen}
        onOpenChange={closeModal}
        title="로그아웃 하시겠습니까?"
        confirmText="로그아웃"
        onConfirm={() => console.log('Logout')}
      />
    </>
  );
}
