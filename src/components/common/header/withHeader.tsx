import classNames from 'classnames';

import { IIconProps } from '@/components/icons/types/iconType';

export default function withHeader(
  title?: string,
  LeftIconComponent?: React.ComponentType<IIconProps>,
  RighticonComponent?: React.ComponentType<IIconProps>,
) {
  return function WrappedComponent(props: IIconProps) {
    return (
      <header className="flex justify-between p-4 text-24px border-b-1 shadow-test1">
        <div className="flex space-x-4 items-center">
          {LeftIconComponent && <LeftIconComponent {...props} />}
          {title && (
            <span
              className={classNames(
                LeftIconComponent ? 'text-14px' : 'text-18px',
                'font-medium',
              )}
            >
              {title}
            </span>
          )}
        </div>
        <div>{RighticonComponent && <RighticonComponent {...props} />}</div>
      </header>
    );
  };
}
