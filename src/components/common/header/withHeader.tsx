import classNames from 'classnames';

export default function withHeader(
  title?: string,
  LeftComponent?: React.ComponentType,
  RightComponent?: React.ComponentType,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WrappedComponent(props: any) {
    return (
      <header className="flex justify-between p-4 text-24px border-b-1 shadow-test1">
        <div className="flex space-x-4 items-center">
          {LeftComponent && <LeftComponent {...props} />}
          {title && (
            <span
              className={classNames(
                LeftComponent ? 'text-14px' : 'text-18px',
                'font-medium',
              )}
            >
              {title}
            </span>
          )}
        </div>
        <div>{RightComponent && <RightComponent {...props} />}</div>
      </header>
    );
  };
}
