import { ICustomButtonProps } from '@/components/common/button/Button';
import IconButton from '@/components/common/button/IconButton';
import { ISearchFormProps } from '@/components/common/form/search-form/SearchForm';
import { IIconProps } from '@/components/icons/types/iconType';

interface IHeaderRightProps {
  RightIcon?: React.ComponentType<IIconProps>;
  onRightClick?: () => void;
  RightButton?: React.ComponentType<ICustomButtonProps>;
  rightButtonProps?: ICustomButtonProps;
  RightForm?: React.ComponentType<ISearchFormProps>;
  rightFormProps?: ISearchFormProps;
}
export default function HeaderActionSection({
  RightIcon,
  onRightClick,
  RightButton,
  rightButtonProps,
  RightForm,
  rightFormProps,
}: IHeaderRightProps) {
  return (
    <>
      {RightIcon && (
        <IconButton
          onClick={onRightClick}
          label="right-icon"
          icon={RightIcon}
        />
      )}
      {RightButton && (
        <RightButton
          {...(rightButtonProps as ICustomButtonProps)}
          onClick={onRightClick}
        />
      )}
      {RightForm && <RightForm {...(rightFormProps as ISearchFormProps)} />}
    </>
  );
}
