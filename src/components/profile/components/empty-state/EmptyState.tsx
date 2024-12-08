import classNames from 'classnames';

interface EmptyStateProps {
  message: string;
  className?: string;
}

export default function EmptyState({ message, className }: EmptyStateProps) {
  return <div className={classNames(className)}>{message}</div>;
}
