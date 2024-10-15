interface IIconButtonProps {
  className?: string;
  label: string;
  icon: React.ComponentType;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function IconButton({
  className = '',
  icon: Icon,
  children,
  label,
  onClick,
}: IIconButtonProps) {
  return (
    <button
      className={className}
      type="button"
      aria-label={label}
      onClick={onClick}
    >
      <Icon />
      {children}
    </button>
  );
}
