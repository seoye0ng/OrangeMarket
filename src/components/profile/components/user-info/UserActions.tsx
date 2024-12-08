import CustomButton from '@/components/common/button/Button';
import FollowButton from '@/components/follow/FollowButton';

import SocialActionButton from './SocialActionButton';

interface IUserActionsProps {
  isFollow: boolean;
  isMyProfile: boolean;
  onNavigate: (path: string) => void;
  onFollow: () => void;
}

export default function UserActions({
  isFollow,
  isMyProfile,
  onNavigate,
  onFollow,
}: IUserActionsProps) {
  if (isMyProfile) {
    return (
      <div className="flex items-center gap-3">
        <CustomButton
          size="ml"
          color="white"
          onClick={() => onNavigate('edit')}
        >
          프로필 수정
        </CustomButton>
        <CustomButton
          size="m"
          color="white"
          onClick={() => onNavigate('product')}
        >
          상품 등록
        </CustomButton>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-10px">
      <SocialActionButton type="채팅" onClick={() => onNavigate('chat')} />
      <FollowButton
        size="ml"
        unFollowMessage="언팔로우"
        isFollow={isFollow}
        onClick={onFollow}
      />
      <SocialActionButton type="공유" />
    </div>
  );
}
