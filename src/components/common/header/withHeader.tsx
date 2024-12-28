import classNames from 'classnames';

import { IIconProps } from '@/components/icons/types/iconType';

import { ICustomButtonProps } from '../button/Button';
import IconButton from '../button/IconButton';
import BottomDrawer, { IdrawerContents } from '../drawer/BottomDrawer';
import { ISearchFormProps } from '../form/search-form/SearchForm';

const headerDrawerContents: IdrawerContents[] = [
  { title: '설정 및 개인정보', action: () => {} },
  { title: '로그아웃', action: () => {} },
];

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
    return (
      <header className="h-header flex items-center justify-between border-b-1 px-4 text-24px">
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
    );
  };
}
