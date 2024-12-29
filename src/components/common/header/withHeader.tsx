import { useDisclosure } from '@nextui-org/react';
import classNames from 'classnames';

import { IIconProps } from '@/components/icons/types/iconType';

import { ICustomButtonProps } from '../button/Button';
import IconButton from '../button/IconButton';
import BottomDrawer, { IdrawerContents } from '../drawer/BottomDrawer';
import { ISearchFormProps } from '../form/search-form/SearchForm';
import AlertModal from '../modal/AlertModal';

export default function withHeader(
  title?: string,
  LeftIcon?: React.ComponentType<IIconProps>,
  RightIcon?: React.ComponentType<IIconProps>,
  RightButton?: React.ComponentType<ICustomButtonProps>,
  RightSearchForm?: React.ComponentType<ISearchFormProps>,
  rightButtonProps?: ICustomButtonProps,
  rightSearchFormProps?: ISearchFormProps,
  onLeftClick?: () => void,
  onRightClick?: () => void,
  isOpen?: boolean,
  onOpenChange?: () => void,
) {
  return function WrappedComponent() {
    const {
      isOpen: isModalOpen,
      onOpen: openModal,
      onOpenChange: closeModal,
    } = useDisclosure();

    const headerDrawerContents: IdrawerContents[] = [
      {
        title: '설정 및 개인정보',
        action: () => console.log('Go to settings'),
      },
      { title: '로그아웃', action: openModal }, // 로그아웃 버튼 클릭 시 Modal 열기
    ];

    return (
      <>
        <header className="h-header border-b-gray flex items-center justify-between px-4 text-24px">
          <div className="flex items-center space-x-4">
            {LeftIcon && (
              <button
                type="button"
                className="cursor-pointer"
                onClick={onLeftClick}
              >
                <LeftIcon activeColor="gray-300" />
              </button>
            )}
            {title && (
              <span
                className={classNames(
                  LeftIcon ? 'text-14px' : 'leading-22px text-18px font-medium',
                )}
              >
                {title}
              </span>
            )}
          </div>
          {RightIcon && (
            <>
              <IconButton onClick={onRightClick} label="">
                <RightIcon activeColor="gray-200" />
              </IconButton>
              <BottomDrawer
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                contents={headerDrawerContents}
              />
            </>
          )}
          {RightButton && (
            <RightButton
              {...(rightButtonProps as ICustomButtonProps)}
              onClick={onRightClick}
            />
          )}
          {RightSearchForm && (
            <RightSearchForm {...(rightSearchFormProps as ISearchFormProps)} />
          )}
        </header>

        <AlertModal
          isOpen={isModalOpen}
          onOpenChange={closeModal}
          title="로그아웃 하시겠습니까?"
          confirmText="로그아웃"
          onConfirm={() => console.log('Logout')}
        />
      </>
    );
  };
}
