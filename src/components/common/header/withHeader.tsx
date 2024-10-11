import classNames from 'classnames';

import { IIconProps } from '@/components/icons/types/iconType';

export default function withHeader(
  title?: string,
  LeftIconComponent?: React.ComponentType<IIconProps>,
  RighticonComponent?: React.ComponentType<IIconProps>,
  handleBackClick?: () => void,
  handleRightIconClick?: () => void,
) {
  return function WrappedComponent(props: IIconProps) {
    return (
      <header className="flex items-center justify-between border-b-1 p-4 text-24px">
        <div className="flex items-center space-x-4">
          {LeftIconComponent && (
            <button
              type="button"
              className="cursor-pointer"
              onClick={handleBackClick}
            >
              <LeftIconComponent {...props} />
            </button>
          )}
          {title && (
            <span
              className={classNames(
                LeftIconComponent
                  ? 'text-14px'
                  : 'leading-22px text-18px font-medium',
              )}
            >
              {title}
            </span>
          )}
        </div>
        {RighticonComponent && (
          <button
            type="button"
            className="cursor-pointer"
            onClick={handleRightIconClick}
          >
            <RighticonComponent {...props} />
          </button>
        )}
      </header>
    );
  };
}
