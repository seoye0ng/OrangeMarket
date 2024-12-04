import { CustomButton } from '@/components/common/button';

interface IFollowButtonProps {
  isFollow: boolean;
  onClick?: () => void;
}

export default function FollowButton({
  isFollow,
  onClick,
}: IFollowButtonProps) {
  return (
    <CustomButton
      onClick={onClick}
      color={isFollow ? 'white' : 'primary'}
      size="s"
    >
      {isFollow ? '취소' : '팔로우'}
    </CustomButton>
  );
}
