import IconButton from '@/components/common/button/IconButton';
import Text from '@/components/common/text/Text';
import { IIconProps } from '@/components/icons/types/iconType';

interface IHeaderLeftProps {
  title?: string;
  LeftIcon?: React.ComponentType<IIconProps>;
  onLeftClick?: () => void;
}

export default function HeaderTitleSection({
  title,
  LeftIcon,
  onLeftClick,
}: IHeaderLeftProps) {
  return (
    <div className="flex items-center space-x-4">
      {LeftIcon && (
        <IconButton label="left-icon" onClick={onLeftClick} icon={LeftIcon} />
      )}
      {title && (
        <Text size={LeftIcon ? '14px' : '18px'} weight="medium">
          {title}
        </Text>
      )}
    </div>
  );
}
