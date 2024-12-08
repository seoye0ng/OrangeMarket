import { CustomButton } from '@/components/common/button';

interface IFollowButtonProps {
  size?: 's' | 'ms' | 'm' | 'ml' | 'l';
  unFollowMessage?: string;
  isFollow: boolean;
  onClick?: () => void;
}

export default function FollowButton({
  size = 's',
  unFollowMessage = '취소',
  isFollow,
  onClick,
}: IFollowButtonProps) {
  return (
    <CustomButton
      onClick={onClick}
      color={isFollow ? 'white' : 'primary'}
      size={size}
    >
      {isFollow ? unFollowMessage : '팔로우'}
    </CustomButton>
  );
}
