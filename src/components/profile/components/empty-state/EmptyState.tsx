import classNames from 'classnames';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  action?: React.ReactNode; // 버튼
  className?: string;
  direction?: 'row' | 'col';
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className,
  direction = 'col',
}: EmptyStateProps) {
  return (
    <div
      className={classNames(
        'flex h-full w-full',
        direction === 'col' ? 'flex-col' : 'flex-row',
        className,
      )}
    >
      {icon && <div>{icon}</div>}
      {title && <p className="font-bold">{title}</p>}
      {description && <p className="text-gray-500">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
}
