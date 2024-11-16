import classNames from 'classnames';

import { IIconProps } from '@/components/icons/types/iconType';

import { ICustomButtonProps } from '../button/Button';
import { ISearchFormProps } from '../form/search-form/SearchForm';

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
) {
  return function WrappedComponent() {
    return (
      <header className="flex items-center justify-between border-b-1 px-4 py-2 text-24px">
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
          <button
            type="button"
            className="my-1 cursor-pointer"
            onClick={onRightClick}
          >
            <RightIcon activeColor="gray-200" />
          </button>
        )}
        {RightButton && (
          <RightButton {...(rightButtonProps as ICustomButtonProps)} />
        )}
        {RightSearchForm && (
          <RightSearchForm {...(rightSearchFormProps as ISearchFormProps)} />
        )}
      </header>
    );
  };
}
