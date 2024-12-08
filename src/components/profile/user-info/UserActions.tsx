import { useState } from 'react';
import SocialActionButton from './SocialActionButton';
import FollowButton from '@/components/follow/FollowButton';
import CustomButton from '@/components/common/button/Button';

interface IUserActionsProps {
  isFollow: boolean;
  isMyProfile: boolean;
  accountname?: string;
}

export default function UserActions({
  isFollow,
  isMyProfile,
  accountname,
}: IUserActionsProps) {
  const [isFollowed, setIsFollowed] = useState(isFollow);

  const handleFollowClick = () => {
    setIsFollowed((prev) => !prev);

    if (isFollowed) {
      // 팔로우 취소 API 호출
      return;
    }
    // 팔로우 API 호출
    return;
  };

  const handleShareClick = () => {
    // 공유하기
  };

  const handleNavigationClick = () => {
    // goTo(path)
  };

  if (isMyProfile) {
    return (
      <div className="flex items-center gap-3">
        <CustomButton size="ml" color="white">
          프로필 수정
        </CustomButton>
        <CustomButton size="m" color="white">
          상품 등록
        </CustomButton>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-10px">
      <SocialActionButton type="채팅" onClick={handleNavigationClick} />
      <FollowButton
        size="ml"
        unFollowMessage="언팔로우"
        isFollow={isFollowed}
        onClick={handleFollowClick}
      />
      <SocialActionButton type="공유" onClick={handleShareClick} />
    </div>
  );
}
